function content() {
var butong_net = new Array('袁隆平爷爷一路走好!','愿天堂没有饥饿','禾下乘凉梦，不悔是初心','吴孟超院士，您辛苦了！','杨伯达院长安息！','夏德昭教授，您给了我们光明！','袁隆平：一粒种尽艰难苦，中华大地无闲田','吴孟超：一世济之于肝胆，德逾千古留芳华','杨伯达：一心纪物几十载，琼台玉馆照紫禁','夏德昭：一目终日任劳怨，光阴荏苒朱成碧')
var butong_net2 = Math.floor(Math.random() * butong_net.length); 
var text = document.getElementById('text');
text.firstChild.nodeValue = butong_net[butong_net2];
}
window.onload = content;