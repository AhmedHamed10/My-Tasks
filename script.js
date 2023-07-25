// الحصول على عناصر الصفحة
const taskInput = document.querySelector('#task-input');
const addTaskButton = document.querySelector('#add-task');
const taskList = document.querySelector('#task-list');

// إضافة حدث النقر على زر الإضافة
addTaskButton.addEventListener('click', function(event) {
  event.preventDefault(); // منع إعادة تحميل الصفحة

  // جمع البيانات من حقل إدخال المهمة
  const taskTitle = taskInput.value.trim();

  // التأكد من أن الحقل غير فارغ قبل إضافة المهمة
  if (taskTitle !== '') {
    // إنشاء عنصر li جديد لعرض المهمة
    const taskItem = document.createElement('li');
    taskItem.classList.add('task');

    // إضافة عنوان المهمة إلى العنصر li
    const taskTitleElement = document.createElement('a');
    taskTitleElement.classList.add('task-title');
    taskTitleElement.textContent = taskTitle;
    taskTitleElement.href = '#';
    taskTitleElement.addEventListener('click', function() {
      taskTitleElement.classList.toggle('completed'); // تحديد المهمة كمكتملة
    });
    taskItem.appendChild(taskTitleElement);

    // إضافة أزرار التحكم بالعنصر li
    const taskActionsElement = document.createElement('div');
    taskActionsElement.classList.add('task-actions');
    const deleteTaskButton = document.createElement('button');
    deleteTaskButton.textContent = 'حذف';
    deleteTaskButton.addEventListener('click', function() {
      taskItem.remove(); // حذف العنصر li عند النقر على زر حذف
    });
    taskActionsElement.appendChild(deleteTaskButton);
    taskItem.appendChild(taskActionsElement);

    // إضافة العنصر li إلى قائمة المهام
    taskList.appendChild(taskItem);

    // إفراغ حقل إدخال المهمة
    taskInput.value = '';
  }
});

// إضافة حدث النقر على عنوان المهمة لتحديد المهام الهامة
taskList.addEventListener('click', function(event) {
  if (event.target.classList.contains('task-title')) {
    event.target.parentElement.classList.toggle('task-important');
  }
});

var chatButton = document.getElementById('chat-button');
var chatBox = document.getElementById('chat-box');

chatButton.addEventListener('click', function() {
  chatBox.style.display = 'block';
});