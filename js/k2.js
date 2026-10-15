// 行动号召按钮统一跳转方法
// 所有「立即下载 / 下载试用」按钮点击后跳转到网站根目录下的压缩包 a.zip
// 本文件统一负责：加载 Google Ads 像素(AW-18503681609) + 配置转化 + 提供按钮跳转入口 k2()

// 1) 动态加载 gtag.js 标签库（.js 文件里不能写 <script> 标签，只能动态注入）
(function () {
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=AW-18503681609';
  document.head.appendChild(s);
})();

// 2) 初始化 dataLayer 与 gtag() 队列
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

// 3) 注册 Google Ads 转化（仅谷歌像素，不含 GA4）
gtag('config', 'AW-18503681609');

// 4) Google Ads 转化事件 + 发送后跳转
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof url !== 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
    'send_to': 'AW-18503681609/ePN8CIal_ZYdEMmMn_dE',
    'event_callback': callback
  });
  return false;
}

// 5) 按钮统一跳转入口（所有 CTA 按钮 onclick="k2(); return false;" 调用）
function k2() {
  gtag_report_conversion('https://halloworde.com/download/halloword.zip');
}
