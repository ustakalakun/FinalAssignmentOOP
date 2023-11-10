// Dictioanary Page

function buttonClicked(){
 

  var word = document.getElementById("word_input").value

  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
  .then((response) => response.json())
  .then((data) => {
      console.log(data)

      const audioURL = data[0].phonetics[0].audio;

      if (audioURL) {
          document.getElementById("audio").innerHTML = `Audio: <a href="${audioURL}" target="_blank">Play</a>`;
      } 
      else {
          document.getElementById("audio").innerHTML = "Audio not available";
      }

      const sourceURL = data[0].sourceUrls;
      if (sourceURL) {
          document.getElementById("url").innerHTML = `URL: <a href="${sourceURL}" target="_blank">${sourceURL}</a>`;
      } 
      else {
          document.getElementById("url").innerHTML = "URL not available";
      }

      document.getElementById("word").innerHTML = `'${word}'`

      document.getElementById("speech1a").innerHTML = `Part Of Speech:`
      document.getElementById("speech1").innerHTML = `${data[0].meanings[0].partOfSpeech}`
      document.getElementById("def1a").innerHTML = `Definition:`

      if (data[0].meanings.length > 0) {
        const meanings = data[0].meanings[0];
        
        if (meanings.definitions.length > 0) {
            document.getElementById("def1").innerHTML = meanings.definitions[0].definition;
        } else {
            document.getElementById("def1").innerHTML = "Sorry not available";
        }
    
        if (meanings.definitions.length > 1) {
            document.getElementById("def2").innerHTML = meanings.definitions[1].definition;
        } else {
            document.getElementById("def2").innerHTML = "Sorry not available";
        }
    
        if (meanings.definitions.length > 2) {
            document.getElementById("def3").innerHTML = meanings.definitions[2].definition;
        } else {
            document.getElementById("def3").innerHTML = "Sorry not available";
        }
        } else {
        // If meanings or definitions are missing, display "Sorry not available" for all fields.
        document.getElementById("def1").innerHTML = "Sorry not available";
        document.getElementById("def2").innerHTML = "Sorry not available";
        document.getElementById("def3").innerHTML = "Sorry not available";
        }

      document.getElementById("exp1a").innerHTML = `Example:`

      if (data[0].meanings.length > 0) {
        const meanings = data[0].meanings[0];
        
        if (meanings.definitions.length > 0) {
            document.getElementById("exp1").innerHTML = meanings.definitions[0].example || "Sorry not available";
        } else {
            document.getElementById("exp1").innerHTML = "Sorry not available";
        }
    
        if (meanings.definitions.length > 1) {
            document.getElementById("exp2").innerHTML = meanings.definitions[1].example || "Sorry not available";
        } else {
            document.getElementById("exp2").innerHTML = "Sorry not available";
        }
    
        if (meanings.definitions.length > 2) {
            document.getElementById("exp3").innerHTML = meanings.definitions[2].example || "Sorry not available";
        } else {
            document.getElementById("exp3").innerHTML = "Sorry not available";
        }
        } else {
        // If meanings or definitions are missing, display "Sorry not available" for all fields.
        document.getElementById("exp1").innerHTML = "Sorry not available";
        document.getElementById("exp2").innerHTML = "Sorry not available";
        document.getElementById("exp3").innerHTML = "Sorry not available";
        }

      document.getElementById("anto1a").innerHTML = `Antonyms:`

      if (data[0].meanings.length > 0) {
        const meanings = data[0].meanings[0];
    
        if (meanings.antonyms) {
            if (meanings.antonyms.length > 0) {
                document.getElementById("anto1").innerHTML = meanings.antonyms[0] || "Sorry not available";
            } else {
                document.getElementById("anto1").innerHTML = "Sorry not available";
            }
    
            if (meanings.antonyms.length > 1) {
                document.getElementById("anto2").innerHTML = meanings.antonyms[1] || "Sorry not available";
            } else {
                document.getElementById("anto2").innerHTML = "Sorry not available";
            }
    
            if (meanings.antonyms.length > 2) {
                document.getElementById("anto3").innerHTML = meanings.antonyms[2] || "Sorry not available";
            } else {
                document.getElementById("anto3").innerHTML = "Sorry not available";
            }
        } else {
            // If antonyms array is missing, display "Sorry not available" for all fields.
            document.getElementById("anto1").innerHTML = "Sorry not available";
            document.getElementById("anto2").innerHTML = "Sorry not available";
            document.getElementById("anto3").innerHTML = "Sorry not available";
        }
        } else {
        // If meanings are missing, display "Sorry not available" for all fields.
        document.getElementById("anto1").innerHTML = "Sorry not available";
        document.getElementById("anto2").innerHTML = "Sorry not available";
        document.getElementById("anto3").innerHTML = "Sorry not available";
        }

      document.getElementById("syno1a").innerHTML = `Synonyms:`

      if (data[0].meanings.length > 0) {
        const meanings = data[0].meanings[0];
    
        if (meanings.synonyms) {
            if (meanings.synonyms.length > 0) {
                document.getElementById("syno1").innerHTML = meanings.synonyms[0] || "Sorry not available";
            } else {
                document.getElementById("syno1").innerHTML = "Sorry not available";
            }
    
            if (meanings.synonyms.length > 1) {
                document.getElementById("syno2").innerHTML = meanings.synonyms[1] || "Sorry not available";
            } else {
                document.getElementById("syno2").innerHTML = "Sorry not available";
            }
    
            if (meanings.synonyms.length > 2) {
                document.getElementById("syno3").innerHTML = meanings.synonyms[2] || "Sorry not available";
            } else {
                document.getElementById("syno3").innerHTML = "Sorry not available";
            }
        } else {
            // If synonyms array is missing, display "Sorry not available" for all fields.
            document.getElementById("syno1").innerHTML = "Sorry not available";
            document.getElementById("syno2").innerHTML = "Sorry not available";
            document.getElementById("syno3").innerHTML = "Sorry not available";
        }
        } else {
        // If meanings are missing, display "Sorry not available" for all fields.
        document.getElementById("syno1").innerHTML = "Sorry not available";
        document.getElementById("syno2").innerHTML = "Sorry not available";
        document.getElementById("syno3").innerHTML = "Sorry not available";
        }





        document.getElementById("speech2a").innerHTML = `Part Of Speech:`
        document.getElementById("speech2").innerHTML = `${data[0].meanings[1].partOfSpeech}`

        document.getElementById("def2a").innerHTML = `Definition:`

        if (data[0].meanings.length > 1) {
            const meanings = data[0].meanings[1]; // Assuming that data[0].meanings[1] exists
        
            if (meanings.definitions.length > 0) {
                document.getElementById("def4").innerHTML = meanings.definitions[0].definition || "Sorry not available";
            } else {
                document.getElementById("def4").innerHTML = "Sorry not available";
            }
        
            if (meanings.definitions.length > 1) {
                document.getElementById("def5").innerHTML = meanings.definitions[1].definition || "Sorry not available";
            } else {
                document.getElementById("def5").innerHTML = "Sorry not available";
            }
        
            if (meanings.definitions.length > 2) {
                document.getElementById("def6").innerHTML = meanings.definitions[2].definition || "Sorry not available";
            } else {
                document.getElementById("def6").innerHTML = "Sorry not available";
            }
            } else {
            // If meanings are missing, display "Sorry not available" for all fields.
            document.getElementById("def4").innerHTML = "Sorry not available";
            document.getElementById("def5").innerHTML = "Sorry not available";
            document.getElementById("def6").innerHTML = "Sorry not available";
            }

        document.getElementById("exp2a").innerHTML = `Example:`

        if (data[0].meanings.length > 1) {
            const meanings = data[0].meanings[1]; // Assuming that data[0].meanings[1] exists
        
            if (meanings.definitions.length > 0) {
                document.getElementById("exp4").innerHTML = meanings.definitions[0].example || "Sorry not available";
            } else {
                document.getElementById("exp4").innerHTML = "Sorry not available";
            }
        
            if (meanings.definitions.length > 1) {
                document.getElementById("exp5").innerHTML = meanings.definitions[1].example || "Sorry not available";
            } else {
                document.getElementById("exp5").innerHTML = "Sorry not available";
            }
        
            if (meanings.definitions.length > 2) {
                document.getElementById("exp6").innerHTML = meanings.definitions[2].example || "Sorry not available";
            } else {
                document.getElementById("exp6").innerHTML = "Sorry not available";
            }
            } else {
            // If meanings are missing, display "Sorry not available" for all fields.
            document.getElementById("exp4").innerHTML = "Sorry not available";
            document.getElementById("exp5").innerHTML = "Sorry not available";
            document.getElementById("exp6").innerHTML = "Sorry not available";
            }

        document.getElementById("anto2a").innerHTML = `Antonyms:`

        if (data[0].meanings.length > 1) {
            const meanings = data[0].meanings[1]; // Assuming that data[0].meanings[1] exists
        
            if (meanings.antonyms) {
                if (meanings.antonyms.length > 0) {
                    document.getElementById("anto4").innerHTML = meanings.antonyms[0] || "Sorry not available";
                } else {
                    document.getElementById("anto4").innerHTML = "Sorry not available";
                }
        
                if (meanings.antonyms.length > 1) {
                    document.getElementById("anto5").innerHTML = meanings.antonyms[1] || "Sorry not available";
                } else {
                    document.getElementById("anto5").innerHTML = "Sorry not available";
                }
        
                if (meanings.antonyms.length > 2) {
                    document.getElementById("anto6").innerHTML = meanings.antonyms[2] || "Sorry not available";
                } else {
                    document.getElementById("anto6").innerHTML = "Sorry not available";
                }
            } else {
                // If antonyms array is missing, display "Sorry not available" for all fields.
                document.getElementById("anto4").innerHTML = "Sorry not available";
                document.getElementById("anto5").innerHTML = "Sorry not available";
                document.getElementById("anto6").innerHTML = "Sorry not available";
            }
        } else {
            // If meanings are missing, display "Sorry not available" for all fields.
            document.getElementById("anto4").innerHTML = "Sorry not available";
            document.getElementById("anto5").innerHTML = "Sorry not available";
            document.getElementById("anto6").innerHTML = "Sorry not available";
        }

        document.getElementById("syno2a").innerHTML = `Synonyms:`

        if (data[0].meanings.length > 1) {
            const meanings = data[0].meanings[1]; // Assuming that data[0].meanings[1] exists
        
            if (meanings.synonyms) {
                if (meanings.synonyms.length > 0) {
                    document.getElementById("syno4").innerHTML = meanings.synonyms[0] || "Sorry not available";
                } else {
                    document.getElementById("syno4").innerHTML = "Sorry not available";
                }
        
                if (meanings.synonyms.length > 1) {
                    document.getElementById("syno5").innerHTML = meanings.synonyms[1] || "Sorry not available";
                } else {
                    document.getElementById("syno5").innerHTML = "Sorry not available";
                }
        
                if (meanings.synonyms.length > 2) {
                    document.getElementById("syno6").innerHTML = meanings.synonyms[2] || "Sorry not available";
                } else {
                    document.getElementById("syno6").innerHTML = "Sorry not available";
                }
            } else {
                // If synonyms array is missing, display "Sorry not available" for all fields.
                document.getElementById("syno4").innerHTML = "Sorry not available";
                document.getElementById("syno5").innerHTML = "Sorry not available";
                document.getElementById("syno6").innerHTML = "Sorry not available";
            }
        } else {
            // If meanings are missing, display "Sorry not available" for all fields.
            document.getElementById("syno4").innerHTML = "Sorry not available";
            document.getElementById("syno5").innerHTML = "Sorry not available";
            document.getElementById("syno6").innerHTML = "Sorry not available";
        }
        

      

  })

}

// CRUD PAGE

const{ app,BrowserWindow } = require('electron');
const fs = require('fs')
const path = require('path')

var btnCreate = document.getElementById('btnCreate')
var btnRead = document.getElementById('btnRead')
var btnDelete = document.getElementById('btnDelete')
var fileName = document.getElementById('fileName')
var fileContents = document.getElementById('fileContents')

let pathName = path.join(__dirname, 'Files' )

btnCreate.addEventListener('click',function(){
    let file = path.join(pathName, fileName.value)
    let contents = fileContents.value
    fs.writeFile(file, contents, function(err){
        if(err){
            return console.log(err)
        }
        var txtfile = document.getElementById("fileName").value
        alert(txtfile + "text file was created")
        console.log("The file was created")
    })

})

btnRead.addEventListener('click', function(){
    let file = path.join(pathName, fileName.value)

    fs.readFile(file, function(err, data){
        if(err){
            return console.log(err)
        }
        fileContents.value = data
        console.log("The file was read!")
    })
})


btnDelete.addEventListener('click', function(){
    let file = path.join(pathName, fileName.value)

    fs.unlink(file, function(err){
        if(err){
            return console.log(err)
        }
        fileName.value = ""
        fileContents.value= ""
        console.log("The file was deleted!")
})
})

btnUpdate.addEventListener('click' ,function(){
    let file = path.join(pathName, fileName.value)
    let contents = fileContents.value

    fs.writeFile(file, contents, function(err){
        if(err){
            return console.log(err)
        }
    var txtfile = document.getElementById("fileName").value
    alert(txtfile + "text file was updated")
    console.log("The file was created")
    fileName.value = ""
    fileContents.value = ""
    })
})
