import React, { useState } from 'react';
import style from "./style.module.css";

const Form = () => {
    const [amoung, setAmoung] = useState("");
    const onChange = event => setAmoung(event.target.value);
    const EuropeMaleNamePool = [
        "Maxim",
        "Artyom",
        "Mikhail",
        "Ivan",
        "Kirill",
        "Andrei",
        "Nikita",
        "Ilya",
        "Alexei",
        "Timofey",
        "Roman",
        "Daniel",
        "Vladimir",
        "Yaroslav",
        "Fedor",
        "Lev",
        "Konstantin",
        "George",
        "Albert",
        "Arseny",
        "Denis",
        "Stepan",
        "Timur",
      ];
      const EuropeFemaleNamePool = [
        "Sofia",
        "Anastasia",
        "Maria",
        "Anya",
        "Alina",
        "Ekaterina",
        "Alyona",
        "Inessa",
        "Mila",
        "Polina",
        "Kira",
        "Natalya",
        "Ulyana",
        "Luda",
        "Yulia",
        "Sasha",
        "Kira",
      ];
      const AsiaMaleNamePool = [
        "An",
        "Bach",
        "Bao",
        "Chi",
        "Dang",
        "Gia",
        "Hien",
        "Khanh",
        "Khuong",
        "Lahn",
        "Lap",
        "Nam",
        "Nhat",
        "Phong",
      ];
      const AsiaFemaleNamePool = [
        "Anh",
        "Cam",
        "Canh",
        "Diep",
        "Dong",
        "Giang",
        "Ha",
        "Lam",
        "Lieu",
        "Namha",
        "Suong",
        "Thu",
        "Xuan",
      ];
      const AfricaMaleNamePool = [
        "Abasi",
        "Azizi",
        "Barack",
        "Daudi",
        "Haji",
        "Hamidi",
        "Issa",
        "Jabari",
        "Jafari",
        "Omarr",
        "Salim",
      ];
      const AfricaFemaleNamePool = [
        "Abeni",
        "Ada",
        "Alaba",
        "Efua",
        "Bamidele",
        "Chimamanda",
        "Ime",
        "Kehindle",
        "Mariama",
        "Oluchi",
      ];
      const Genders = ["Male", "Female"];
      const Groups = [
        "БФИ1801",
        "БЭИ1801",
        "БЭИ1802",
        "БВТ1801",
        "БВТ1802",
        "БВТ1803",
        "БСТ1801",
        "БСТ1802",
        "БСТ1803",
      ];
      const Countries = ["Russia", "Vietnam", "Nigeria"];
      //RowNumber,CustomerId,Surname,CreditScore,Geography,Gender,Age,Tenure,Balance,NumOfProducts,HasCrCard,IsActiveMember,EstimatedSalary,Exited
      //1,15634602,Hargrave,619,France,Female,42,2,0,1,1,1,101348.88,1
      
      function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }
      
      function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      
      const selectRandom = (array) => {
        return array[Math.floor(Math.random() * array.length)];
      };
      
      const prepareDependentData = () => {
        let data = [];
        let perfomance;
        let sex;
        let age;
        let maxIncome;
        let leavingIndex = 0.5;
        !Math.round(Math.random()) ? (sex = Genders[0]) : (sex = Genders[1]);
        let country = getRandomIntInclusive(0, 2);
        if (country == 0) {
          sex == "Male"
            ? data.push(selectRandom(EuropeMaleNamePool))
            : data.push(selectRandom(EuropeFemaleNamePool));
        } else if (country == 1) {
          sex == "Male"
            ? data.push(selectRandom(AsiaMaleNamePool))
            : data.push(selectRandom(AsiaFemaleNamePool));
        } else if (country == 2) {
          sex == "Male"
            ? data.push(selectRandom(AfricaMaleNamePool))
            : data.push(selectRandom(AsiaFemaleNamePool));
        }
        perfomance = Number(getRandomArbitrary(3, 5).toFixed(1));
        if (perfomance > 3 && perfomance < 4) {
          leavingIndex = leavingIndex + 0.05;
        } else if (perfomance > 4) {
          leavingIndex = leavingIndex + 0.1;
        }
        data.push(perfomance);
        if (country == 0) {
          data.push(Countries[0]);
          leavingIndex = leavingIndex + 0.05;
        } else if (country == 1) {
          data.push(Countries[1]);
        } else if (country == 2) {
          data.push(Countries[2]);
          leavingIndex = leavingIndex + 0.1;
        }
        (sex == "Male" ? data.push("Male") : data.push("Female"));
          sex == "Male"
            ? (leavingIndex = leavingIndex + 0.05)
            : (leavingIndex = leavingIndex - 0.1)
      
        age = Number(getRandomArbitrary(19, 25).toFixed(0));
        if (age == 19) {
          leavingIndex = leavingIndex + 0.01;
        } else if (age == 20) {
          leavingIndex = leavingIndex + 0.02;
        } else if (age == 21) {
          leavingIndex = leavingIndex + 0.03;
        } else if (age == 22) {
          leavingIndex = leavingIndex + 0.04;
        } else if (age == 23) {
          leavingIndex = leavingIndex + 0.03;
        } else if (age == 24) {
          leavingIndex = leavingIndex + 0.02;
        } else if (age == 25) {
          leavingIndex = leavingIndex + 0.01;
        }
        data.push(age);
        !Math.round(Math.random())
          ? (maxIncome = 15000)
          : !Math.round(Math.random())
          ? (maxIncome = 30000)
          : (maxIncome = 60000);
        data.push(maxIncome);
        if (maxIncome == 15000) {
          leavingIndex = leavingIndex + 0.05;
        } else if (maxIncome == 30000) {
          leavingIndex = leavingIndex + 0.1;
        } else {
          leavingIndex = leavingIndex - 0.1;
        }
        data.push(leavingIndex);
        return data;
      };
      
      const fillData = (rownumber, id) => {
        const dependentData = prepareDependentData();
        return [
          rownumber, //RowNUmber 
          id, //StudentId 
          dependentData[0], //Name 
          dependentData[1], //Perfomance
          dependentData[2], //Country
          dependentData[3], //Gender
          dependentData[4], //Age
          4, //Course
          0, //Savings
          getRandomIntInclusive(0, 1), //FullDInner
          getRandomIntInclusive(0, 1), //Domitory
          getRandomIntInclusive(0, 1), //Canteen
          getRandomIntInclusive(0, dependentData[5]), //Income
          Math.random() < dependentData[6] ? 1 : 0, //ChoseVostochka
        ];
      };
      
      const getData = (amoung)=>{
        if(isNaN(amoung)){
            alert('Проверьте правильность введеных данных');
        }else{
      let newCsv = [];
      
      newCsv.push([
        "RowNumber",
        "StudentId",
        "Name",
        "Perfomance",
        "Country",
        "Gender",
        "Age",
        "Course",
        "Savings",
        "FullDinner",
        "Dormitory",
        "Canteen",
        "Income",
        "ChoseVostochka",
      ]);
      for (let i = 0; i < amoung; i++) {
        newCsv.push(fillData(i, i));
      }
      
      console.log(newCsv);
      let csvContent =
        "data:text/csv;charset=utf-8," + newCsv.map((e) => e.join(",")).join("\n");
      
      var encodedUri = encodeURI(csvContent);
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "students.csv");
      document.body.appendChild(link);
      link.click();
    }
    }
  return (
    <div className={style.wrapper}>
      <div className={style.form}>
        <div className={style.logo}>
          <img src = "https://abitur.mtuci.ru/bitrix/templates/modern_blue_s5/images/mtuci_logo21.png" className={style.image}/>
        </div>
        <div className={style.label}>
          <p className={style.top}>Генератор данных для тестирования</p>
          <p className={style.bottom}>Данны о посетителях столовой (кроме Восточной)</p>
        </div>
        <div className={style.input}>
        <p className={style.inputLabel}>Введите число студентов:</p>
        <input 
        className={style.inputComponent}
        type="text" 
        value={amoung} 
        onChange={onChange}
      />
        </div>
        <div className={style.button}>
          <button className={style.buttonComponent} onClick = {()=>getData(Number(amoung))}>Скачать данные</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
