 float[] floatData;
 float xOffset = 50.0;
 float yOffset = 0;
 String[] csvFiles = {"contentAnswered.csv", "contentUnanswered.csv", "noncontentAnswered.csv", "noncontentUnanswered.csv"};
 String[] labels = {"Answered Content Questions", "Unanswered Content Questions", "Answered Non-Content Questions", "Unanswered Non-Content Questions"};
 PFont myFont;
 PFont boldFont;
 String savedFileName = "timeline.jpg";   


void setup() {
  size(700, 600);
  background(255); 
  myFont = createFont("Arial", 32);
  boldFont = createFont("Arial-Bold.ttf", 24);
  textFont(myFont); 
  for (int a=0; a<csvFiles.length; a++){
    String csvFile = csvFiles[a];
    String[] stringData = loadStrings(csvFile);
    float[] floatData = new float[stringData.length-1];
  // convert strings to ints
  // convert starting from row 1
  for (int i = 1 ; i < stringData.length; i++) {
    floatData[i-1] = float(stringData[i]);
  }

    drawLines(floatData, csvFile);
  
    if (a == 0){
      fill(230, 104, 22);
      text(labels[a] + ": " + floatData.length, 50, yOffset + 100);

    }
    else if (a == 1){
      fill(40, 51, 92);
      text("Unanswered ", 50, yOffset + 100);
      fill(230, 104, 22);
      text("Content Questions: "  + floatData.length, 50 + textWidth("Unanswered "), yOffset + 100);
    }
    else if (a == 2){
      fill(230, 104, 22);
      text("Answered ", 50, yOffset + 100);
      fill(40, 51, 92);
      text("Non-Content Questions: " + floatData.length, 50 + textWidth("Answered "), yOffset + 100);
    }
    else if (a == 3){
      fill(40, 51, 92);
      text("Unanswered Non-Content Questions: " + floatData.length, 50, yOffset + 100);
    }

    yOffset += 120;
    

  }
    String csvFile = csvFiles[0];
    String[] stringData = loadStrings(csvFile);
    String firstRow = stringData[0];
    String courseNumber = firstRow.substring(0, 6);
    String dayDateTime = firstRow.substring(7);
    
    // add commas
    String classLength = dayDateTime.substring(dayDateTime.length()-7, dayDateTime.length());
    dayDateTime = dayDateTime.substring(0, dayDateTime.length()-classLength.length()-1);
    String classTime = dayDateTime.substring(dayDateTime.length()-7, dayDateTime.length());
    dayDateTime = dayDateTime.substring(0, dayDateTime.length()-classTime.length()-1);
    dayDateTime = dayDateTime + ", " + classTime + ", " + classLength;
    
    fill(50);

    textSize(24);
        textFont(boldFont);
    text("start of class", 50, yOffset + 85);
    text("end of class", 650 - textWidth("end of class"), yOffset + 85);
    
    // course number
    text(courseNumber, xOffset, 50);
    // day date time length
    text(dayDateTime, 650 - textWidth(dayDateTime), 50);
  save(savedFileName);
      PImage timeline = loadImage(savedFileName);
    timeline.resize(500, 0);
}

void drawLines(float[] csv, String graphName) {
    strokeWeight(3);

  if (graphName == "contentAnswered.csv" || graphName == "contentUnanswered.csv"){
     fill(255, 230, 164); // orange
     stroke(230, 104, 22); // dark orange
  }
  else if (graphName == "noncontentAnswered.csv" || graphName == "noncontentUnanswered.csv"){
    fill(200, 217, 242); // blue
    stroke(40, 51, 92); // dark blue

  }
  
  strokeWeight(0);
  rect(xOffset, 108 + yOffset, 600, 67);
  
  float temp = 0.0;
  strokeWeight(.80);
  for (int j=0; j<csv.length; j++){
    //println(temp, csv[j]);
    if (abs(csv[j] - temp) < 0.60) {
      csv[j] += 1;
    }
    temp = csv[j];
    //println (xOffset + csv[j]*6.0);
    line(xOffset + csv[j]*6.0, 110 + yOffset, xOffset + csv[j]*6.0, 173 + yOffset);
  }
}