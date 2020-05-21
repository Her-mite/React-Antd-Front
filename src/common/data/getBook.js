/**
 * 爬虫获取小说封面、名称、作者、简介、类别等信息
 */
const superagent = require('superagent')
const cheerio = require('cheerio')
const https = require('https')
const fs = require('fs')


/**
 * @description 入口函数：获取报文数据
 * @param {string} websiteURL 网址
 * @param {string} bookType 书籍类型
 */
function getBookInfo(websiteURL,bookType) {
    let bookUrl = []
    //新建文件夹
    mkdir(bookType)
    superagent.get(websiteURL).end((err, res) => {
        if (err) {
            console.log(err);
        } else {
            bookUrl = getBookURL(res,bookType)   //获取子路径  
            console.log(bookUrl);
               
            getDetailInfo(bookUrl,bookType)      //获取子路径的数据
        }
    })
}

//根据新获取到url找到对应路径的数据
function getBookURL(res, bookType) {
    let bookUrl = []
    let $ = cheerio.load(res.text);
    console.log($('div.new-rec-wrap').length);
    
    if(bookType==='newBook'){
        //新书推荐
        $('div.new-rec-wrap').find('.center-book-list').find('.book-info').each((idx,ele)=>{
            bookUrl.push('https:' + $(ele).find('h3').find('a').attr('href'))
        })
        $('div.new-rec-wrap').find('div.rank-list').find('.book-list').find('li').each((idx, ele)=>{
            bookUrl.push('https:' + $(ele).find('a').attr('href'))
        })
        return bookUrl
    }else if(bookType==='lastUpdated'){
        //最近更新
        $('div#update-list').find('tr').each((idx, ele)=>{
            bookUrl.push('https:'+$(ele).children('td').eq(1).children('a').attr('href'))
        })
        return bookUrl
    }else{
        //种类书籍
        //本周强推10本
        $("div.rec-list").find('em').find('a').each((idx, ele) => {
            bookUrl.push('https:' + $(ele).attr('href'))
        })
        //导航栏5本
        $("div.big-list").find('div.img-box').find('a').each((idx, ele) => {
            bookUrl.push('https:' + $(ele).attr('href'))
        })
        return bookUrl
    }
}

//循环获取详细数据
let getDetailInfo = async (bookUrl, bookType) => {
    var bookName = [], author = [], pictureUrl = [], category = [], bookDescription = [];

    await bookUrl.forEach(async function (value, index, array) {
        await superagent.get(value).end((err, res) => {
            if (err) {
                console.log(err);
                return
            } else {
                let $ = cheerio.load(res.text);

                bookName.push($('div.book-info').find('h1').find('em').text())
                author.push($('div.book-info').find('h1').find('a').text())
                bookDescription.push($('div.book-intro p').text().replace(/\s/g, ''))
                category.push($('p.tag a').last().text())
                pictureUrl.push($('div.book-information a').first().find('img').attr('src').replace('\n', ''))

            }

        })
    });
    setTimeout(() => {
        let bookInfoObj = []
        //所有信息封装成对象数组
        bookName.forEach((value, index, array) => {
            bookInfoObj.push({
                bookName: value,
                author: author[index],
                bookDescription: bookDescription[index],
                category: category[index],
                pictureUrl: pictureUrl[index]
            })
        });
        console.log(bookInfoObj);
        //下载图片
        bookName.forEach((value, index, array) => {
            downloadPic(pictureUrl[index], value,bookType)
        })
        //写入文件
        writeFile(bookInfoObj,bookType)

    }, 3000);

}

//新建文件夹存放数据和图片
let  mkdir = async(bookType)=>{
    //若该文件夹不存在则新建,否则不进行任何操作    
    
    await fs.exists('/'+bookType+'Pic/',function(exists){
        
        if(!exists){            
            fs.mkdir('./'+bookType+'Pic/',function(err){                
                if(err){
                    console.log(`${bookType}Pic文件夹创建失败`);
                }else{
                    console.log(`${bookType}Pic文件夹创建成功`);
                    
                }
            })  
        }else{
            console.log('无需新建文件夹');
            
        }
    })
}

//根据图片地址下载图片到本地方法
function downloadPic(pictureUrl, bookName, bookType) {
    //准备下载图片
    console.log('准备下载图片');
    
    pictureUrl = 'https:' + pictureUrl;        //增加https请求协议

    let location = fs.createWriteStream('./'+bookType+'Pic/' + bookName + '.jpg')   //指定图片下载位置和文件名称
    https.get(pictureUrl, (res) => {
        res.pipe(location);
        console.log(`${bookName}下载完成`);
    })

}

//将获取到的数据信息写入文件
function writeFile(book,bookType) {
    //将获取到的数据写入一个新的文件
    let cws = fs.createWriteStream('./'+bookType+'Pic/'+bookType+'Data.js') // ./histroryPic/historyData.js

    let bookData = JSON.stringify(book);
    bookData = bookData.replace(/"bookName"/g, 'bookName')
    bookData = bookData.replace(/"bookDescription"/g, 'bookDescription')
    bookData = bookData.replace(/"author"/g, 'author')
    bookData = bookData.replace(/"category"/g, 'category')
    bookData = bookData.replace(/"pictureUrl"/g, 'pictureUrl')

    cws.write('let bookData  =' + bookData + ' \nmodule.exports = bookData')
}

//main方法 获取科幻书信息 
// getBookInfo('https://www.qidian.com/kehuan','kehuan')

//main方法 获取悬疑书信息
// getBookInfo('https://www.qidian.com/lingyi','suspense')

//main方法 获取历史书信息
// getBookInfo('https://www.qidian.com/lishi', 'history')

//main方法 获取都市书信息
// getBookInfo('https://www.qidian.com/dushi','urban')

//main方法 获取现实书信息
// getBookInfo('https://www.qidian.com/youxi','game')

// getBookInfo('https://www.qidian.com/','newBook')    //热门书籍
getBookInfo('https://www.qidian.com/','lastUpdated')//最近更新




