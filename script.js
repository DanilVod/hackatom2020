//Если да то, если нет то?
//Подсчет углердного слоя
const textInForm = document.querySelector('.textInForm')
const answer = document.querySelector('.blockAnswer')
const next = document.querySelector('#next')
let resultCO2 = 0
let point = 0

//БЛОКИ С ВОПРОСАМИ
const blockOfQuestion1 = [
  'В каком регионе вы живете? Если нет вашего варианта, выберите тот город, в котором вы бы хотели жить',
  'Чем вы занимаетесь?',
  'Укажите тип вашего жилья',
  'Укажите кол-во людей, проживающих с вами',
  'Имеете ли вы доступ к коммунальным счетам?',
  'Введите показания горячей воды по счетчику за последний месяц',
  'У вас есть что-нибудь газовое?',
  'Введите показания по расходу газа',
  'Введите показания горячей воды по счетчику за последний месяц',
  'Введите показания отопления в Гкал',
  'Введите показания электроэнергии в кВт*ч',
  'Отметьте, если что-то из перечисленного для вас актуально',
  'Есть ли у вас водительское удостоверение?',
  'Есть ли у вас личный автомобиль?',
  'Отметьте характеристики, которые относятся к вашему автомобилю'
]

//МАССИВ С ВАРИАНТАМИ ОТВЕТА НА ВОПРОС
let variableAnswerArr = [
  ['Москва', 'СПБ'],
  ['работаю в офисе', 'учусь', 'фрилансю', 'не сижу дома'],
  [
    'живу в квартире',
    'снимаю комнату в квартире',
    'живу в частном доме',
    'живу в общежитии'
  ],
  [''],
  ['Да', 'Нет(Тогда мы возьмем среднее)'],
  [''],
  ['Да', 'Нет'],
  [''],
  [''],
  [''],
  [''],
  [
    'У меня есть лампочка Ильича',
    'Сплю с включенным светом',
    'Люблю, когда душ погорячее',
    'Оставляю зарядку в розетке, когда устройство уже заряжено',
    'Кипячу полный чайник воды даже когда пью чай один',
    'Давно не размораживал холодильник',
    'Стираю одежду при высоких температурах',
    'Часто пользуюсь кондиционером и/или обогревателем',
    'Не пользуюсь энергоэффективными электроприборами',
    'Предпочитаю принимать ванну, а не душ',
    'Не выключаю воду, когда намыливаю себя или посуду',
    'Не пользуюсь посудомоечной машиной',
    'Не пользуюсь экономичными насадками для крана/душа',
    'У меня нет двойного слива в унитазе'
  ],
  ['Да', 'Нет'],
  ['Да', 'Нет'],
  [
    'Легковой',
    'Внедорожник',
    'На бензине',
    'На электричестве',
    'На дизеле',
    'Старый (Евро 3 и ниже)',
    'Новый (Евро 4 и выше)'
  ]
]

const answerArr = [
  addCheckBox,
  addSelect,
  addSelect,
  addInput,
  addBoolean,
  addInput,
  addBoolean,
  addInput,
  addInput,
  addInput,
  addInput,
  addCheckBox,
  addBoolean,
  addBoolean,
  addCheckBox
]

function getCheckedCheckBoxes() {
  var checkboxes = document.getElementsByClassName('checkbox')
  var checkboxesChecked = [] // можно в массиве их хранить, если нужно использовать
  for (var index = 0; index < checkboxes.length; index++) {
    if (checkboxes[index].checked) {
      checkboxesChecked.push(checkboxes[index].value) // положим в массив выбранный
    }
  }
  return checkboxesChecked // для использования в нужном месте
}

let typeOfQuestion = 0
let count = 0
next.addEventListener('click', () => {
  const val = document.querySelector('.lala')
  //ЛОГИКА ДЛЯ ВОПРОСОВ
  count == 5 && check() == 0 ? (count += 6) : count
  count == 7 && check() == 0 ? (count += 4) : count
  //ЛОГИКА ДЛЯ ВОПРОСОВ
  addAnswer(val, count)
  test(count)

  count++

  textInForm.innerHTML = blockOfQuestion1[count - 1]

  return point
})
function check() {
  var inp = document.getElementsByName('dzen')
  for (var i = 0; i < inp.length; i++) {
    if (inp[i].type == 'radio' && inp[i].checked) {
      return inp[i].value
    }
  }
}

const solution = []
let town = solution[0] == 'Москва' ? 0.2 : 0.25
function addAnswer(val, count) {
  if (typeOfQuestion == 2) {
    //селектора

    point -= +val.options[val.selectedIndex].value
  } else if (typeOfQuestion == 1) {
    //Логика для инпута
    //СЮДА ФОРМУЛЫ И ЛОГИКУ
    count == 8 && town == 0.2
      ? (resultCO2 += val.value * town * 8.5)
      : (resultCO2 += val.value * town * 8.5)
    count == 9 && town == 0.2
      ? (resultCO2 += val.value * town * 46)
      : (resultCO2 += val.value * town * 46)
    count == 10 && town == 0.2
      ? (resultCO2 += val.value * town * 1163)
      : (resultCO2 += val.value * town * 1163)
    count == 11 && town == 0.2
      ? (resultCO2 += val.value * town)
      : (resultCO2 += val.value * town)
    //СЮДА ФОРМУЛЫ И ЛОГИКУ
    point += +val.value
  } else if (typeOfQuestion == 3) {
    point -= +check() || 0
    return +check()
  } else {
    //Логика для чекбоксов

    getCheckedCheckBoxes().map(el => {
      count !== 1 || 0
        ? solution.push(variableAnswerArr[count - 1][+el - 1])
        : ''
      return (point -= +el)
    })
  }
}
function test(count) {
  next.innerText = 'Следующий'
  document
    .querySelector('.answer')
    .parentNode.removeChild(document.querySelector('.answer'))
  while (count < answerArr.length) {
    return answerArr[count].name == 'addCheckBox'
      ? answerArr[count](1, variableAnswerArr[count])
      : answerArr[count].name == 'addBoolean'
      ? answerArr[count](variableAnswerArr[count])
      : answerArr[count].name == 'addInput'
      ? answerArr[count](1, variableAnswerArr[count])
      : answerArr[count].name == 'addSelect'
      ? answerArr[count](1, variableAnswerArr[count])
      : ''
  }
  printResult()
}
function addInput(point, arr) {
  typeOfQuestion = 1
  return answer.insertAdjacentHTML(
    'afterbegin',
    `<div class="answer"><p>${arr[0]}</p><input type="text" class="lala"></div>`
  )
}
function printResult() {
  console.log(solution)
  next.remove(next)
  textInForm.remove()
  return answer.insertAdjacentHTML(
    'afterbegin',
    `<p class='endTop'>Задумайтесь над этим:<p class='end'>${solution}<div class='result'>Вес твоего углеродного чемодана: ${resultCO2} кг</div></p></p>`
  )
}
function addSelect(point, arr) {
  typeOfQuestion = 2
  let result = ''
  function createOption() {
    for (let i = 0; i < arr.length; i++) {
      result += `<option value=${i + 1}>${arr[i]}</option>`
    }
    return result
  }
  const inHtml = `<div class="answer"><select class='lala'>${createOption()}</select></div>`
  return answer.insertAdjacentHTML('afterbegin', `${inHtml}`)
}

function addBoolean(arr) {
  typeOfQuestion = 3
  const inHtml = `<form class='answer'>
    <p><input name="dzen" type="radio" value="1">${arr[0]}</p>
    <p><input name="dzen" type="radio" value="0"> ${arr[1]}</p>
  </form>`
  return answer.insertAdjacentHTML('afterbegin', `${inHtml}`)
}

function addCheckBox(point, arr) {
  typeOfQuestion = 4
  let result = ''
  function createOption() {
    for (let i = 0; i < arr.length; i++) {
      result += `<p><input type="checkbox" class="checkbox" value=${i + 1}>${
        arr[i]
      }</p>`
    }
    return result
  }
  const inHtml = `<div class="answer"><form class='lala'>${createOption()}</form></div>`
  return answer.insertAdjacentHTML('afterbegin', `${inHtml}`)
}
