// const express = require('express')
const superagent = require('superagent')
const cheerio = require('cheerio')
const https = require('https')
const fs = require('fs')

// const app = express();

// let server = app.listen(3000, function(){
//     let host = server.address().address;
//     let port = server.address().port;
//     console.log('your app is running at http://%s:%s',host,port);  
// })


function getAllBookInfo() {
    let bookDetails = []

    superagent.get('https://www.qidian.com/lishi').end((err, res) => {
        if (err) {
            console.log(err);
        } else {
            bookDetails = getBookDetails(res)
        }
    })

    let getBookDetails = (res) => {
        let book = []
        let bookName = [], bookDescription = [], author = [], category = [], pictureUrl = []

        let $ = cheerio.load(res.text)

        $('div#new-book-list').each((idx, ele) => {
            //在名字为new-book-list的div下找到<h4></h4>包含的文本（书籍名称）
            $(ele).find('h4').each((idx, ele) => {
                bookName.push($(ele).text())
            })
            //在名字为new-book-list的div下找到<p></p>标签包含的内容（图书描述）
            $(ele).find('p').each((idx, ele) => {
                bookDescription.push($(ele).text())
            })
            //在名字为new-book-list的div下找到class为state-box的div，取出<a></a>包含的内容（作者）,以及<a href="..."></a>中href包含内容（图片索引地址）
            $(ele).find('div.state-box').find('a').each((idx, ele) => {
                author.push($(ele).text())
            })
            //在名字为new-book-list的div下找到class为state-box的div，取出<i></i>包含的内容（图书类别）
            $(ele).find('div.state-box').find('i').each((idx, ele) => {
                category.push($(ele).text())
            })
            $(ele).find('div.book-img').find('img').each((idx, ele) => {
                pictureUrl.push($(ele).attr('src'))
            })
        })

        pictureUrl.forEach((pictureUrl, index) => {
            downloadPic(pictureUrl, bookName[index])
        })

        //根据图片地址下载图片到本地方法
        function downloadPic(pictureUrl, bookName) {
            pictureUrl = 'https:' + pictureUrl;        //增加https请求协议
            let location = fs.createWriteStream('./bookPic/' + bookName + '.jpg')   //指定图片下载位置和文件名称
            https.get(pictureUrl, (res) => {
                res.pipe(location)
            })
            console.log(`${bookName}下载完成`);

        }

        //将所有数据存入book对象中，包括书籍名称、作者、描述、类别以及图片
        bookName.forEach((value, index, array) => {
            book.push({
                bookName: bookName[index],
                bookDescription: bookDescription[index],
                author: author[index],
                category: category[index],
                pictureUrl: pictureUrl[index]
            })
        })
        let cws = fs.createWriteStream('./bookdata.js')

        let bookData = JSON.stringify(book);
        bookData = bookData.replace(/"bookName"/g, 'bookName')
        bookData = bookData.replace(/"bookDescription"/g, 'bookDescription')
        bookData = bookData.replace(/"author"/g, 'author')
        bookData = bookData.replace(/"category"/g, 'category')
        bookData = bookData.replace(/"pictureUrl"/g, 'pictureUrl')

        console.log(bookData);



        cws.write('let bookData  =' + bookData + ' \nmodule.exports = bookData')

    }
}

exports.getAllBookInfo = getAllBookInfo
