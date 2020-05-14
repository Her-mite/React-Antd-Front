/**
 * 爬虫获取小说封面、名称、作者、简介、类别等信息
 */
// const express = require('express')
const superagent = require('superagent')
const cheerio = require('cheerio')
const https = require('https')
const fs = require('fs')


//入口函数：获取报文数据
function getXuanhuanBook() {
    let bookUrl = []
    superagent.get('https://www.qidian.com/kehuan').end((err, res) => {
        if (err) {
            console.log(err);
        } else {
            bookUrl = getXuanhuanURL(res)   //获取子路径
            getDetailInfo(bookUrl)          //获取子路径的数据
        }
    })
}

//根据新获取到url找到对应路径的数据
function getXuanhuanURL(res) {
    let bookUrl = []
    let $ = cheerio.load(res.text);
    // console.log($('.big-list').length);

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

//循环获取详细数据
let getDetailInfo = async (bookUrl) => {
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
            downloadPic(pictureUrl[index], value)
        })
        //写入文件
        writeFile(bookInfoObj)

    }, 3000);

}

//根据图片地址下载图片到本地方法
function downloadPic(pictureUrl, bookName) {
    pictureUrl = 'https:' + pictureUrl;        //增加https请求协议

    let location = fs.createWriteStream('./kehuanPic/' + bookName + '.jpg')   //指定图片下载位置和文件名称
    https.get(pictureUrl, (res) => {
        res.pipe(location);
        console.log(`${bookName}下载完成`);
    })

}

//将获取到的数据信息写入文件
function writeFile(book) {
    //将获取到的数据写入一个新的文件
    let cws = fs.createWriteStream('./kehuanPic/kehuanData.js')

    let bookData = JSON.stringify(book);
    bookData = bookData.replace(/"bookName"/g, 'bookName')
    bookData = bookData.replace(/"bookDescription"/g, 'bookDescription')
    bookData = bookData.replace(/"author"/g, 'author')
    bookData = bookData.replace(/"category"/g, 'category')
    bookData = bookData.replace(/"pictureUrl"/g, 'pictureUrl')

    cws.write('let bookData  =' + bookData + ' \nmodule.exports = bookData')
}

//main方法 获取科幻书信息 
getXuanhuanBook()
