var images = require("images");
var fs = require("fs");
var path = require("path");
var fromDir = 'E:/imgSource';
var outDir = 'E:/outputImg';

function fileDisplay(filePath,outdir){
    //根据文件路径读取文件，返回文件列表
    fs.readdir(filePath,function(err,files){
        if(err){
            console.warn(err)
        }else{
            //遍历读取到的文件列表
            files.forEach(function(filename){
                //获取当前文件的绝对路径
                var filedir = path.join(filePath,filename);
                var outdirect = path.join(outdir,filename);
                //根据文件路径获取文件信息，返回一个fs.Stats对象
                fs.stat(filedir,function(eror,stats){
                    if(eror){
                        console.warn('获取文件stats失败');
                    }else{
                        var isFile = stats.isFile();//是文件
                        var isDir = stats.isDirectory();//是文件夹
                        if(isFile){
                            doImg(filedir,outdirect)
                        }
                        if(isDir){
                            console.log(path.join(outDir,filename))
                            fs.exists(path.join(outDir,filename),function(exists){
                                if(exists){
                                    console.log(filename+'文件夹已经存在')
                                    fileDisplay(filedir,path.join(outDir,filename))
                                }else{
                                	fs.mkdir(path.join(outDir,filename),function(error){
                                        if(error) {
                                            console.log(error);
                                            // throw new Error(error)
                                        }else {
                                            fileDisplay(filedir,path.join(outDir,filename))
                                        }
                                    })
                                }
                            })
                        }
                    }
                })
            });
        }
    });
}

function doImg(fromPath,outPath){
	images(images(fromPath),0,0,800,1100)
	// .draw(images("./bin/123.jpg"),600,900)
	.resize(400)
	.save(outPath, {
	    quality : 50 
	});	
}
fileDisplay(fromDir,outDir)