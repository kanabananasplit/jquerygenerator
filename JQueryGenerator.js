$(document).ready(function(){
	var clickedOnce = 0; // Ensures if button clicked more than once, then will delete table then generate new table

	/* When GO button is pressed, a table is generated based off of count input */
	$("#buttonToShowRows").click(function(){
		clickedOnce++;
		var numRows = $("#textboxInputNumber").val();
		var progName = $("#textboxProgName").val();
		/* Validates input of "count" to generate table. If it is not an integer or is blank, user is notified and table is not generated */
		if (isNaN(numRows) || numRows == ""){
			window.alert("Please enter an integer in count.");
			return false;
		}

		/* Generate table normally the first time */
		if (clickedOnce == true){
			generateTable(numRows, progName);
		}
		/* Clear table here and update table every other time "GO" button is pressed */
		/* Empty() removes all child nodes (AKA everything appended to it) */
		else{
			$("p").empty();
			generateTable(numRows, progName);
		}
	});

	/* Generates table. */
	/* 3 buttons are created for formatting table: Shade Every Other Row, Show Dark Line Every 10 Rows, Reset Table */
	function generateTable(rows, name){
		var i = 0; //for loop variable

		/* buttonShadeEveryOther is button we create to shade every other row of table. The button is appended to the paragraph tag in HTML */
		var buttonShadeEveryOther = document.createElement("BUTTON");
		buttonShadeEveryOther.id = "buttonShadeEveryOther";
		buttonShadeEveryOther.innerHTML = "Shade Every Other Row";
		$("p").append(buttonShadeEveryOther);

		/* buttonShowDarkLineE10 is button we create to thicken bottom of 10th line of table. The button is appended to the paragraph tag in HTML */
		var buttonShowDarkLineE10 = document.createElement("BUTTON");
		buttonShowDarkLineE10.id = "buttonShowDarkLineE10";
		buttonShowDarkLineE10.innerHTML = "Show Dark Line Every 10 Row";
		$("p").append(buttonShowDarkLineE10);

		/* buttonResetTable is button we create to clear all formatting on table. The btuton is appended to the paragraph tag in HTML */
		var buttonResetTable = document.createElement("BUTTON");
		buttonResetTable.id = "buttonResetTable";
		buttonResetTable.innerHTML = "Reset Table";
		$("p").append(buttonResetTable);

		/* genTable is the table we create. Initially empty, have to append to it. */
		/* TR creates a new row. */
		/* TD creates a column. We do it twice so there's two columns in the row */
		/* text1 in first column. text2 in second column */
		var genTable = document.createElement("TABLE");
		var headRow = document.createElement("TR");
		var headCol1 = document.createElement("TD");
		var headCol2 = document.createElement("TD");
		var headText1 = document.createTextNode("COUNT");
		var headText2 = document.createTextNode("PROGRAMMER'S NAME");

		/* Appending "headText1" to headCol1.. This just adds the textnode to the element we created */
		/* Appending "headText2" to headCol2.. This just adds the textnode to the element we created */
		/* Appending "headCol1" to the row we created */
		/* Appending "headCol2" to the row we created */
		/* Appending "headRow" to the table we created */
		headCol1.append(headText1);
		headCol2.append(headText2);
		headRow.append(headCol1);
		headRow.append(headCol2);
		genTable.append(headRow);

		/* Rows with data filled in it are created based off of count-input from user */
		for (i = 0; i < rows; i++){
			var currRow = document.createElement("TR"); 
			var col1 = document.createElement("TD");
			var col2 = document.createElement("TD");
			var text1 = document.createTextNode(i + 1);
			var text2 = document.createTextNode(name);

			col1.append(text1);
			col2.append(text2);
			currRow.append(col1);
			currRow.append(col2);
			genTable.append(currRow);
		} //close for loop

		/* Appending "currRow" to the table we created */
		$("p").append(genTable); 	//Is it okay to do this?

		/* When "Shade Every Other Row" button is clicked */
		/* When clicked, rows should be alternatively shaded (white and #DDD) */
		$("#buttonShadeEveryOther").click(function(){
			for (i = 2; i < rows + 2; i += 2){
				$("tr:eq("+i+")").addClass("highlightBackground"); //tricky with index "i".. had to concatenate 
			}
		});

		/* Darkens bottom of every 10th line of table */
		$("#buttonShowDarkLineE10").click(function(){
			for (i = 0; i <= rows; i += 10){
				$("tr:eq("+i+")").addClass("darkLineE10");
			}
		});

		/* Clears formatting of every row of table */
		$("#buttonResetTable").click(function(){
			for (i = 0; i <= rows; i++){
				$("tr:eq("+i+")").addClass("noFormat");
			}
		});
	}
});



















