function change_color(){
    //alert('Test case 123')
    document.getElementById('abc').style.backgroundColor='red'
}
function change_case(){
    // //alert('Test case')
    // let tag_ref=document.getElementById('xyz')
    // console.log(tag_ref)
    // let name=tag_ref.Value;
    // console.log(name)//

   let name = document.getElementById('xyz').Value
   console.log(name)
   //alert(name.touppercase())
   document.getElementById('xyz').value = name.toUpperCase()
}
