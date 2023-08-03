const symbols = ['Movie marathon?','Game night?', 'Hungry?', 'Unexpected guests?','Cooking gone wrong?']
count = 0
let inthandle = setInterval(() => {
  document.getElementById("change").innerHTML = symbols[count];
  count = (count + 1) % symbols.length
}, 2000)