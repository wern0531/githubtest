//指定DOM
var cm = document.getElementById('H');
var kg = document.getElementById('M');
var sendData = document.querySelector('.btn');
var list = document.querySelector('.list');
var data = JSON.parse(localStorage.getItem('listData')) || [];

//監聽與更新
sendData.addEventListener('click', addData,false);
updateList(data);

//加入列表，並同步更新網頁與 localstorage
function addData(e){
    e.preventDefault();
    var cm = document.getElementById('H').value * 0.01;
    var kg = document.getElementById('M').value;
    answer = Math.round((kg/cm/cm)*10)/10;
    var todo = {
        content: answer,
        cm: cm,
        kg: kg
      };
    data.push(todo);
    updateList(data);
    localStorage.setItem('listData', JSON.stringify(data));
}

// 更新網頁內容
function updateList(items){
    str = '';
    var len = items.length;
    var dateNow = new Date();
    for(var i = 0;i < len;i ++){
        if(items[i].content < 18.5){
            str+= 
              '<div class="BMIdata">'
            + '<div class="BMIcolor green"></div>'  
            + '<div class="result">過輕</div>'
            + '<div>BMI<p class="BMI">' + items[i].content + '</p></div>'
            + '<div>weight<p class="weight">' + items[i].kg + 'kg</p></div>  '           
            + '<div>height<p class="height">' + items[i].cm * 100 + 'cm</p></div> '          
            + '<div class="date">' + (dateNow.getMonth()+1) + '-' + dateNow.getDate() + '-' + dateNow.getFullYear() + '</div>'
            + '</div>'
        }else if(items[i].content >= 18.5 && items[i].content < 24){
            str+= 
              '<div class="BMIdata">'
            + '<div class="BMIcolor blue"></div>' 
            + '<p class="result">理想</p>'
            + '<div>BMI<p class="BMI">' + items[i].content + '</p></div>'
            + '<div>weight<p class="weight">' + items[i].kg + 'kg</p></div>  '           
            + '<div>height<p class="height">' + items[i].cm * 100 + 'cm</p></div> '          
            + '<div class="date">' + (dateNow.getMonth()+1) + '-' + dateNow.getDate() + '-' + dateNow.getFullYear() + '</div>'
            + '</div>'
        }else if(items[i].content >= 24 && items[i].content < 27){
            str+= 
              '<div class="BMIdata">'
            + '<div class="BMIcolor orange1"></div>' 
            + '<p class="result">過重</p>'
            + '<div>BMI<p class="BMI">' + items[i].content + '</p></div>'
            + '<div>weight<p class="weight">' + items[i].kg + 'kg</p></div>  '           
            + '<div>height<p class="height">' + items[i].cm * 100 + 'cm</p></div> '          
            + '<div class="date">' + (dateNow.getMonth()+1) + '-' + dateNow.getDate() + '-' + dateNow.getFullYear() + '</div>'
            + '</div>'
        }else if(items[i].content >= 27 && items[i].content < 30){
            str+= 
              '<div class="BMIdata">'
            + '<div class="BMIcolor orange2"></div>' 
            + '<p class="result">輕度肥胖</p>'
            + '<div>BMI<p class="BMI">' + items[i].content + '</p></div>'
            + '<div>weight<p class="weight">' + items[i].kg + 'kg</p></div>  '           
            + '<div>height<p class="height">' + items[i].cm * 100 + 'cm</p></div> '          
            + '<div class="date">' + (dateNow.getMonth()+1) + '-' + dateNow.getDate() + '-' + dateNow.getFullYear() + '</div>'
            + '</div>'
        }else if(items[i].content >= 30 && items[i].content < 35){
            str+= 
              '<div class="BMIdata">'
            + '<div class="BMIcolor orange2"></div>' 
            + '<p class="result">中度肥胖</p>'
            + '<div>BMI<p class="BMI">' + items[i].content + '</p></div>'
            + '<div>weight<p class="weight">' + items[i].kg + 'kg</p></div>  '           
            + '<div>height<p class="height">' + items[i].cm * 100 + 'cm</p></div> '          
            + '<div class="date">' + (dateNow.getMonth()+1) + '-' + dateNow.getDate() + '-' + dateNow.getFullYear() + '</div>'
            + '</div>'
        }else if(items[i].content >= 35){
            str+= 
              '<div class="BMIdata">'
            + '<div class="BMIcolor red"></div>' 
            + '<p class="result">重度肥胖</p>'
            + '<div>BMI<p class="BMI">' + items[i].content + '</p></div>'
            + '<div>weight<p class="weight">' + items[i].kg + 'kg</p></div>  '           
            + '<div>height<p class="height">' + items[i].cm * 100 + 'cm</p></div> '          
            + '<div class="date">' + (dateNow.getMonth()+1) + '-' + dateNow.getDate() + '-' + dateNow.getFullYear() + '</div>'
            + '</div>'
        }                    
    }
    list.innerHTML = str;
}


