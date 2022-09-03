const myDate = [];
const myValue = [];
const uploadconfirm = document.getElementById('uploadconfirm').addEventListener('click',()=>{
  Papa.parse(document.getElementById('uploadfile').files[0],
  {
    download: true,
    header: true,
    skipEmptyLines: true,
    complete: function(results){
      for(i = 0; i<results.data.length;i++)
      {
        myDate.push(results.data[i].Date);
        myValue.push(results.data[i].adj_index_level);
      }
      for(i = 0; i<results.data.length;i++)
      {
        document.write(myDate[i] + " " + myValue[i] + "<br >");
      }
    }
  });
});
