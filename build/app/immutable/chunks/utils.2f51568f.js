const f=t=>t.substring(7,t.length);function l(t){const o=t.amount/10**t.decimal;let n;const e=Math.abs(o),a=Math.floor(e).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"),s=e.toString().length>5?e.toFixed(5).split(".")[1]:e.toString().split(".")[1];return n=(t.activity_type.includes("Deposit")?"+":"-")+a+(s?`.${s}`:""),n.substring(0,8)+" "+t.symbol}function h(t){const o=new Date(t),n=o.getDate(),e=o.getMonth()+1,a=o.getFullYear(),s=o.getHours(),r=o.getMinutes();o.getSeconds();const c=s>=12?"PM":"AM",m=n<10?"0"+n:n,u=e<10?"0"+e:e,i=s%12||12,d=r<10?"0"+r:r;return`${u}/${m}/${a}, ${i}:${d} ${c}`}export{h as a,l as f,f as r};
