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
    var bookName = [], author = [], pictureUrl = [], category = [], bookDescription = [], content = [];
    let p = Promise.resolve();
    for(let i = 0; i < bookUrl.length; i ++){
        p = p.then(_=> new Promise(resolve =>{
            superagent.get(bookUrl[i]).end(async(err, res) => {
                if (err) {
                    console.log("err",err);
                    return
                } else {
                    let $ = cheerio.load(res.text);
    
                    bookName.push($('div.book-info').find('h1').find('em').text())
                    author.push($('div.book-info').find('h1').find('a').text())
                    bookDescription.push($('div.book-intro p').text().replace(/\s/g, ''))
                    category.push($('p.tag a').last().text())
                    pictureUrl.push($('div.book-information a').first().find('img').attr('src').replace('\n', ''))
    
                    let readURL = $('div.book-info').find('a#readBtn').attr('href');//试读页面
                        superagent.get("https:"+readURL).end((err, res)=>{
                            if(err){
                                console.log(err)
                            }else{
                                let $ = cheerio.load(res.text);
                                console.log($('h1').text()); // 书籍名称
                                console.log($('span.content-wrap').text()); // 章节名称
                                content.push($('div.read-content').find('p').text()); // 获取所有本章内容 
                                if($('div.read-content').find('p').text()!=="")  {
                                    resolve(content)
                                }  
                            }
                        })

                }
            })
        }))
    }
    p.then(function(){
        let bookInfoObj = []
        //所有信息封装成对象数组
        bookName.forEach((value, index, array) => {
            bookInfoObj.push({
                bookName: value,
                author: author[index],
                bookDescription: bookDescription[index],
                category: category[index],
                pictureUrl: pictureUrl[index],
                content: content[index]
            })
        });
        console.log(bookInfoObj);
       
        bookName.forEach((value, index, array) => {
            p = p.then(_=>new Promise(resolve=>{
                //图片下载
                let downloadUrl = 'https:' + pictureUrl[index];        //增加https请求协议
                console.log(value, "开始下载");

                let location = fs.createWriteStream('./' + bookType + 'Pic/' + value + '.jpg')   //指定图片下载位置和文件名称
                https.get(downloadUrl, (res) => {
                    if (res) {
                        res.pipe(location);
                        console.log(`${value}下载完成`);
                        resolve()
                    }
                })
            }))  
        })

        //写入文件
        writeFile(bookInfoObj,bookType)
    })
 
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
    bookData = bookData.replace(/"content"/g, 'content')

    cws.write('let bookData  =' + bookData + ' \nmodule.exports = bookData')
}

// main方法 获取科幻书信息 
getBookInfo('https://www.qidian.com/kehuan','kehuan')

// main方法 获取悬疑书信息
// getBookInfo('https://www.qidian.com/lingyi','suspense')

// main方法 获取历史书信息
// getBookInfo('https://www.qidian.com/lishi', 'history')

// main方法 获取都市书信息
// getBookInfo('https://www.qidian.com/dushi','urban')

// main方法 获取游戏书信息
// getBookInfo('https://www.qidian.com/youxi','game')

// main方法 热门书籍
// getBookInfo('https://www.qidian.com/','newBook')    

// main方法 最近更新
// getBookInfo('https://www.qidian.com/','lastUpdated')




