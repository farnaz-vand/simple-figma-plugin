function runplugin(){
 let selectedElements = figma.currentPage.selection.length


 if (selectedElements === 0){
  figma.closePlugin('No element selected!')
  return
 }
 if (selectedElements >1 ){
  figma.closePlugin('please select a single element')
  return
 }
 let selectedName = figma.currentPage.selection[0].name

 function hasSameName(Node){
  return Node.name === selectedName
 }

 let withSameName = figma .currentPage.findAll(hasSameName)

 figma.currentPage.selection = withSameName

 figma.closePlugin(withSameName.length + 'Elements selected')
 return
}
runplugin()