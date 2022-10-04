function onFormSubmit(e){
var sheet = SpreadsheetApp.getActiveSheet();
var row =  SpreadsheetApp.getActiveSheet().getLastRow();  
  sheet.getRange(row,4).setValue(row-1);
}
