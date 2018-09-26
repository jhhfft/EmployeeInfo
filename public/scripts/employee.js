// $('#example1').calendar({
//   type: 'date',
//   formatter: { // 自定义日期的格式
//     date: function (date, settings) {
//       if (!date) return '';

//       var year = date.getFullYear();
//       var month = date.getMonth() + 1;
//       var day = date.getDate();

//       month = month < 10 ? '0' + month : month;
//       day = day < 10 ? '0' + day : day;

//       return year + '-' + month + '-' + day;
//     }
//   }
// });

$('.date-picker').calendar({
  type: 'date', // month
  formatter: { // 自定义日期的格式
    date: function (date, settings) {
      if (!date) return '';

      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();

      month = month < 10 ? '0' + month : month;
      day = day < 10 ? '0' + day : day;

      return year + '-' + month + '-' + day;
    }
  }
})
$('.month-picker').calendar({
  type: 'month', // month
  formatter: { // 自定义日期的格式
    date: function (date, settings) {
      if (!date) return '';

      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();

      month = month < 10 ? '0' + month : month;
      day = day < 10 ? '0' + day : day;

      return year + '-' + month;
    }
  }
})
// const today = new Date()
// const year = today.getFullYear()
// const month = today.getMonth() + 1
// const date = today.getDate()
// $('.cell-birthday input').val(year + '-' + month + '-' + date)

const study_row = `<tr class="detail">
<td style="overflow:visible">
  <div class="ui input transparent">
    <div class="ui calendar month-picker">
      <div class="ui input left input transparent">
        <input type="text" class="study-start">
      </div>
    </div>
    <span>至</span>
    <div class="ui calendar month-picker">
      <div class="ui input left input transparent">
        <input type="text" class="study-end">
      </div>
    </div>
  </div>
</td>
<td>
  <div class="ui input transparent">
    <input type="text" class="study-school">
  </div>
</td>
<td>
  <div class="ui input transparent">
    <input type="text" class="study-state">
  </div>
</td>
<td>
  <div class="ui input transparent">
    <input type="text" class="study-degree">
  </div>
</td>
<td>
  <div class="ui input transparent">
    <input type="text" class="study-evidence">
  </div>
</td>
</tr>`
$('#add-study').click(function (e) {
  $(study_row).insertBefore($(this).parent())
})

const work_row = `<tr class="detail">
<td style="overflow:visible">
  <div class="ui input transparent">
    <div class="ui calendar month-picker">
      <div class="ui input left input transparent">
        <input type="text" class="work-start">
      </div>
    </div>
    <span>至</span>
    <div class="ui calendar month-picker">
      <div class="ui input left input transparent">
        <input type="text" class="work-end">
      </div>
    </div>
  </div>
</td>
<td>
  <div class="ui input transparent">
    <input type="text" class="work-department">
  </div>
</td>
<td>
  <div class="ui input transparent">
    <input type="text" class="work-evidence">
  </div>
</td>
</tr>`

$('#add-work').click(function (e) {
  $(work_row).insertBefore($(this).parent())
})

const politics_row = `<tr class="detail">
<td style="overflow:visible">
  <div class="ui input transparent">
    <div class="ui calendar month-picker">
      <div class="ui input left input transparent">
        <input type="text" class="work-start">
      </div>
    </div>
  </div>
</td>
<td>
  <div class="ui input transparent">
    <input type="text" class="politics-meeting">
  </div>
</td>
<td>
  <div class="ui input transparent">
    <input type="text" class="politics-duty">
  </div>
</td>
</tr>`

$('#add-politics').click(function (e) {
  $(politics_row).insertBefore($(this).parent())
})


// 上传图片
$('#portrait input').on('change', function () {
  var filePath = $(this).val(),         //获取到input的value，里面是文件的路径
    fileFormat = filePath.substring(filePath.lastIndexOf(".")).toLowerCase(),
    src = window.URL.createObjectURL(this.files[0]); //转成可以在本地预览的格式

  // 检查是否是图片
  if (!fileFormat.match(/.png|.jpg|.jpeg/)) {
    error_prompt_alert('上传错误,文件格式必须为：png/jpg/jpeg');
    return;
  }
  $('#portrait label').css("opacity","0");
  $('#portrait img').attr('src', src);
  $('#portrait img').show();
});

$('select.dropdown').dropdown();

// 
$(document).keyup(function (event) {
  if (event.keyCode == 13) {
    return false
  }
});
// 表单验证

let name_flag = false,
  nation_flag = false,
  hometown_flag = false,
  birthplace_flag = false,
  health_flag = false,
  phone_flag = false,
  idNum_flag = false,
  marriage_flag = false,
  portrait_flag = false,
  education_flag = false,
  school_flag = false,
  workdate_flag = false

$('input[name=name]').change(function (e) {
  const name = $(this).val()
  const pattern = /^[\u4E00-\u9FA5]+$/
  if (!pattern.test(name)) {
    $('.cell-name').addClass('error')
    name_flag = false
    alert('请输入正确的姓名！')
  } else {
    $('.cell-name').removeClass('error')
    name_flag = true
  }
})

$('input[name=nation]').change(function (e) {
  const nation = $(this).val()
  const pattern = /^[\u4E00-\u9FA5]+$/
  if (!pattern.test(nation)) {
    $('.cell-nation').addClass('error')
    nation_flag = false
    alert('请输入正确的民族！')
  } else {
    $('.cell-nation').removeClass('error')
    nation_flag = true
  }
})

$('input[name=hometown]').change(function (e) {
  const hometown = $(this).val()
  const pattern = /^[\u4E00-\u9FA5]+$/
  if (!pattern.test(hometown)) {
    $('.cell-hometown').addClass('error')
    hometown_flag = false
    alert('请输入正确的籍贯！')
  } else {
    $('.cell-hometown').removeClass('error')
    hometown_flag = true
  }
})

$('input[name=birthplace]').change(function (e) {
  const birthplace = $(this).val()
  const pattern = /^[\u4E00-\u9FA5]+$/
  if (!pattern.test(birthplace)) {
    $('.cell-birthplace').addClass('error')
    birthplace_flag = false
    alert('请输入正确的出生地！')
  } else {
    $('.cell-birthplace').removeClass('error')
    birthplace_flag = true
  }
})

$('input[name=health]').change(function (e) {
  const health = $(this).val()
  const pattern = /^[\u4E00-\u9FA5]+$/
  if (!pattern.test(health)) {
    $('.cell-health').addClass('error')
    health_flag = false
    alert('请输入正确的健康状况！')
  } else {
    $('.cell-health').removeClass('error')
    health_flag = true
  }
})

$('input[name=phone]').change(function (e) {
  const phone = $(this).val()
  const pattern = /^1[0123456789]{10}$/
  if (!pattern.test(phone)) {
    $('.cell-phone').addClass('error')
    phone_flag = false
    alert('请输入正确的手机号码！')
  } else {
    $('.cell-phone').removeClass('error')
    phone_flag = true
  }
})

$('input[name=idNum]').change(function (e) {
  const idNum = $(this).val()
  const pattern = /^[0123456789X]{18}$/
  if (!pattern.test(idNum)) {
    $('.cell-idNum').addClass('error')
    idNum_flag = false
    alert('请输入正确的身份证号码！')
  } else {
    $('.cell-idNum').removeClass('error')
    idNum_flag = true
  }
})

$('input[name=marriage]').change(function (e) {
  const marriage = $(this).val()
  const pattern = /^[\u4E00-\u9FA5]+$/
  if (!pattern.test(marriage)) {
    $('.cell-marriage').addClass('error')
    marriage_flag = false
    alert('请输入正确的婚姻状况！')
  } else {
    $('.cell-marriage').removeClass('error')
    marriage_flag = true
  }
})

$('input[name=birthday]').change(function (e) {
  birthday_flag = true
})

$('input[name=workdate]').change(function (e) {
  workdate_flag = true
})

$('input[name=school]').change(function (e) {
  school_flag = true
})

// 表单提交 信息收集以及验证

function formValidate() {
  if (!name_flag) {
    $('.cell-name').addClass('error')
    name_flag = false
    alert('请输入正确的姓名！')
    return false
  }
  if (!nation_flag) {
    $('.cell-nation').addClass('error')
    nation_flag = false
    alert('请输入正确的民族！')
    return false
  }
  if (!hometown_flag) {
    $('.cell-hometown').addClass('error')
    hometown_flag = false
    alert('请输入正确的籍贯！')
    return false
  }
  if (!birthplace_flag) {
    $('.cell-birthplace').addClass('error')
    birthplace_flag = false
    alert('请输入正确的出生地！')
    return false
  }
  if (!health_flag) {
    $('.cell-health').addClass('error')
    health_flag = false
    alert('请输入正确的健康状况！')
    return false
  }
  if (!phone) {
    $('.cell-phone').addClass('error')
    phone_flag = false
    alert('请输入正确的手机号码！')
    return false
  }
  if (!idNum_flag) {
    $('.cell-idNum').addClass('error')
    idNum_flag = false
    alert('请输入正确的身份证号码！')
    return false
  }
  if (!marriage) {
    $('.cell-marriage').addClass('error')
    marriage_flag = false
    alert('请输入正确的婚姻状况！')
    return false
  }
  if(!school_flag){
    $('.cell-school').addClass('error')
    school_flag = false
    alert('请输入正确的毕业院校！')
    return false
  }
  if(!birthday_flag){
    $('.cell-birthday').addClass('error')
    birthday_flag = false
    alert('请输入正确的出生日期！')
    return false
  }
  if(!workdate_flag){
    $('.cell-workdate').addClass('error')
    workdate_flag = false
    alert('请输入正确的参加工作时间！')
    return false
  }
  return true
}

const formContent = {}
$('#btn-save').click(function (e) {

  // if (!formValidate()) {
  //   return 0
  // }

  const formData = new FormData()
  // 基本信息 21个
  formData.append('name', $('input[name=name]').val())
  formData.append('sex', $('input[name=sex]:checked').val())
  // 头像
  formData.append("portrait", $('#headportrait')[0].files[0])
  formData.append('nation', $('input[name=nation]').val())
  formData.append('birthday', $('input[name=birthday]').val())
  formData.append('hometown', $('input[name=hometown]').val())
  formData.append('education', $('select#education').val())
  formData.append('birthplace', $('input[name=birthplace]').val())
  formData.append('degree', $('input[name=degree]').val())
  formData.append('health', $('input[name=health]').val())
  formData.append('school', $('input[name=school]').val())
  formData.append('politicalStatus', $('select#politicalStatus').val())
  formData.append('idNum', $('input[name=idNum]').val())
  formData.append('phone', $('input[name=phone]').val())
  formData.append('address', $('input[name=address]').val())
  formData.append('job', $('input[name=job]').val())  
  formData.append('department', $('input[name=department]').val())
  formData.append('workdate', $('input[name=workdate]').val())
  formData.append('postLevel', $('input[name=postLevel]').val())
  formData.append('postSalary', $('input[name=postSalary]').val())
  formData.append('postRatio', $('input[name=postRatio]').val())
  // 经历与资格 17个
  formData.append('startwork', $('#startwork').val())
  formData.append('startCPC', $('#startCPC').val())
  formData.append('startCCYL', $('#startCCYL').val())
  formData.append('startCDP',$('#startCDP').val())
  formData.append('techpost',$('#techpost').val())
  formData.append('techlevel',$('#techlevel').val())
  formData.append('police',$('#police').val())
  formData.append('train',$('#train').val())
  formData.append('create',$('#create').val())
  formData.append('socialgroup',$('#socialgroup').val())
  formData.append('religion',$('#religion').val())
  formData.append('internation',$('#internation').val())
  formData.append('language',$('#language').val())
  formData.append('award',$('#award').val())
  formData.append('punish',$('#punish').val())
  formData.append('negative',$('#negative').val())
  formData.append('revolution',$('#revolution').val())
  // 学习简历
  const study_exp = []
  $('#study .detail').each(function () {
    let start = $(this).find(".study-start").val()
    let end = $(this).find(".study-end").val()
    let school = $(this).find(".study-school").val()
    let state = $(this).find(".study-state").val()
    let degree = $(this).find(".study-degree").val()
    let evidence = $(this).find(".study-evidence").val()
    if (school) {
      study_exp.push(start + ';' + end + ';' + school + ';' + state + ';' + degree + ';' + evidence)
    }
  })
  formData.append('study_exp',study_exp)

  // 工作经历
  const work_exp = []
  $('#work .detail').each(function () {
    let start = $(this).find(".work-start").val()
    let end = $(this).find(".work-end").val()
    let department = $(this).find(".work-department").val()
    let evidence = $(this).find(".work-evidence").val()
    if (department) {
      work_exp.push(start + ';' + end + ';' + department + ';' + evidence)
    }
  })
  formData.append('work_exp',work_exp)

  // 政治经历
  const politics_exp = []
  $('#politics .detail').each(function () {
    let time = $(this).find(".politics-time").val()
    let meeting = $(this).find(".politics-meeting").val()
    let duty = $(this).find(".politics-duty").val()
    if (meeting) {
      politics_exp.push(time + ';' + meeting + ';' + duty)
    }
  })
  formData.append('politics_exp',politics_exp)

  // 婚姻状况
  formData.append('marriage',$('#marriage').val())
  const mate = []
  if ($('#mate-name').val()) {
    let mate_name = $('#mate-name').val()
    let mate_birthday = $('#mate-birthday input').val()
    let mate_nation = $('#mate-nation').val()
    let mate_hometown = $('#mate-hometown').val()
    let mate_startwork = $('#mate-startwork').val()
    let mate_politicalStatus = $('#mate-politicalStatus').val()
    let mate_education = $('#mate-education').val()
    let mate_salary = $('#mate-salary').val()
    let mate_techjob = $('#mate-techjob').val()
    let mate_school = $('#mate-school').val()
    let mate_unit = $('#mate-unit').val()
    mate.push(mate_name)
    mate.push(mate_birthday)
    mate.push(mate_nation)
    mate.push(mate_hometown)
    mate.push(mate_startwork)
    mate.push(mate_politicalStatus)
    mate.push(mate_education)
    mate.push(mate_salary)
    mate.push(mate_techjob)
    mate.push(mate_school)
    mate.push(mate_unit)
  }
  formData.append('mate',mate)

  // 家庭情况
  const family = []
  $('.family-member').each(function () {
    let rela = $(this).find(".family-rela").val()
    let name = $(this).find(".family-name").val()
    let birthday = $(this).find(".family-birthday").val()
    let political = $(this).find(".family-political").val()
    let job = $(this).find(".family-job").val()
    if (name) {
      family.push(rela + ';' + name + ';' + birthday + ';' + political + ';' + job)
    }
  })
  formData.append('family',family)
  // 社会关系
  const social_rela = []
  $('.social-relation').each(function () {
    let rela = $(this).find(".social-rela").val()
    let name = $(this).find(".social-name").val()
    let birthday = $(this).find(".social-birthday").val()
    let political = $(this).find(".social-political").val()
    let job = $(this).find(".social-job").val()
    if (name) {
      social_rela.push(rela + ';' + name + ';' + birthday + ';' + political + ';' + job)
    }
  })
  formData.append('social_rela',social_rela)

  
  $.ajax({
    url: './save',
    type: 'POST',
    cache: false,
    data: formData,
    processData: false,
    contentType: false
  })
})