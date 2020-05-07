function getFirstSelector(selector){
  return document.querySelector(selector)

}
function nestedTarget(){
return document.querySelector(' #nested .target')
}


function increaseRankBy(n){
  const rankList=document
  .getElementById('app')
  .querySelectorAll('.ranked-list');

  for (let i=0; i < rankList.length; i++){
    //since ranked-lists have a bunch of children elements in its
    let liChildren= rankList[i].children;
    for (let j =0; j< liChildren.length; j++){
      liChildren[j].innerHTML= parseInt(liChildren[j].innerHTML) + n;
    }
  }
}

function deepestChild(){
  let node= document
  .getElementById('grand-node')


  let nextNode = node.children[0]
  while (nextNode){
    node= nextNode;
    nextNode= node.children[0]
  }
  return node;

}
