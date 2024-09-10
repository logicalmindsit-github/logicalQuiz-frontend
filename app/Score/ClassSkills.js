class ClassSkills {
  constructor() {
    this.skills = {
      LowerKindergarten: {
        "A.Comparing": this.generateDummyDataForSkill([
          "A.1 Compare in a mixed group",
          "A.2 Same and different",
          "A.3 Classify shapes",
          "A.4 Classify shapes by colour",
          "A.5 Classify and sort by colour",
          "A.6 Classify and sort by shape",
        ]),
        "B.Counting": this.generateDummyDataForSkill([
          "B.1 Learn to count",
          "B.2 Count objects",
          "B.3 Count dots",
          "B.4 Count shapes",
          "B.5 Count on ten frames",
        ]),
        "C.Patterns": this.generateDummyDataForSkill([
          "C.1 Colour patterns",
          "C.2 Size patterns",
          "C.3 Shape patterns",
          "C.4 What comes next?",
        ]),
      },
      UpperKindergarten: {
        "A.Addition": this.generateDummyDataForSkill([
          "A.1 Picture Addition",
          "A.2 Sum of two numbers up to 10",
          "A.3 Addition word problems",
          "A.4 Complete the addition sentence",
          "A.5 Form a number using addition",
        ]),
        "B.Comparing": this.generateDummyDataForSkill([
          "B.1 Are there enough?",
          "B.2 Fewer and more - compare by matching",
          "B.3 Fewer and more - compare by counting",
          "B.4 Fewer and more - compare in a mixed group",
          "B.5 Fewer, more and same",
          "B.6 Compare two numbers - up to 10",
          "B.7 Compare three numbers - up to 10",
        ]),
        "C.Counting": this.generateDummyDataForSkill([
          "C.1 Count using stickers",
          "C.2 Count on ten frames",
          "C.3 Represent numbers",
          "C.4 Learn to count to 10",
          "C.5 Count up and down",
          "C.6 Tally marks up to 10",
          "C.7 Number lines up to 20",
          "C.8 Before, after and between - up to 20",
        ]),
        "D.MixedOperations": this.generateDummyDataForSkill([
          "D.1 Sum and difference",
        ]),
        "E.Patterns": this.generateDummyDataForSkill([
          "E.1 Complete a sequence - up to 10",
          "E.2 Complete a sequence - up to 20",
          "E.3 Colour patterns",
          "E.4 Size patterns",
          "E.5 Shape patterns",
          "E.6 Find the next shape in a pattern",
        ]),
        "F.Subtraction": this.generateDummyDataForSkill([
          "F.1 Subtract with pictures - numbers up to 10",
          "F.2 Subtraction sentences - numbers up to 10",
          "F.3 Form a number using subtraction - numbers up to 10",
          "F.4 Subtract - numbers up to 10",
          "F.5 Complete the subtraction sentence - numbers up to 10",
          "F.6 Subtraction word problems - numbers up to 10",
        ]),
        "G.Geometry": this.generateDummyDataForSkill([
          "G.1 Classify Two-dimensional",
          "G.2 Classify Three-dimensional shapes",
          "G.3 Count sides and corners",
          "G.4 Compare sides and corners",
        ]),
      },
      ClassI: {
        "A.Addition": this.generateDummyDataForSkill([
          "A.1 Basic Addition",
          "A.2 Form a number using addition",
          "A.3 Complete the addition sentence",
          "A.4 Word Problems",
          "A.5 Adding Zero",
        ]),
        "B.Comparing": this.generateDummyDataForSkill([
          "B.1 Comparing - review",
          "B.2 Comparing numbers up to 10",
          "B.3 Comparing numbers up to 100",
          "B.4 Comparison word problems",
          "B.5 Count shapes in a Venn diagram",
        ]),
        "C.Counting": this.generateDummyDataForSkill([
          "C.1 Counting review",
          "C.2 Count to fill a ten frame",
          "C.3 Counting tens and ones",
          "C.4 Number lines - up to 100",
          "C.5 Hundred chart",
          "C.6 Sequences - count up and down by 100",
        ]),
        "D.Estimation": this.generateDummyDataForSkill([
          "D.1 Estimate sum and differences",
          "D.2 Estimate to the nearest ten",
        ]),
        "E.Geometry": this.generateDummyDataForSkill([
          "E.1 Classify two-dimensional shapes",
          "E.2 Count sides and vertices",
          "E.3 Compare sides and vertices",
          "E.4 Open and closed shapes",
          "E.5 Spatial sense",
        ]),
        "F.Measurement": this.generateDummyDataForSkill([
          "F.1 Compare long and short",
          "F.2 Tall and short",
          "F.3 Light and heavy",
          "F.4 Compare size and weight",
        ]),
        "G.MixedOperations": this.generateDummyDataForSkill([
          "G.1 Make a number with addition and subtraction",
          "G.2 Addition and Subtraction facts",
          "G.3 Addition Word Problem",
          "G.4 Subtraction Word Problem",
        ]),
        "H.Patterns": this.generateDummyDataForSkill([
          "H.1 Introduction to patterns",
          "H.2 Skip-counting patterns - with tables",
          "H.3 Sequences - count up and down by 1, 2, 3, 5 and 10",
          "H.4 Find the next shape in a pattern",
          "H.5 Make and complete a pattern",
        ]),
        "I.Subtraction": this.generateDummyDataForSkill([
          "I.1 Introduction to Subtraction",
          "I.2 Subtraction sentences - numbers up to 10",
          "I.3 Subtraction sentences using number lines - numbers up to 10",
          "I.4 Subtract zero and all",
          "I.5 Ways to subtract from a number - subtraction sentences",
          "I.6 Subtract a one-digit number from a two-digit number",
        ]),
        "J.TimesTables": this.generateDummyDataForSkill([
          "J.1 Introduction to Multiplication",
          "J.2 Multiply using pictures",
          "J.3 Multiply in parts",
          "J.4 Multiply by 10",
          "J.5 Word problems on multiplication",
        ]),
      },
      ClassII: {
        "A.Addition": this.generateDummyDataForSkill([
          "A.1 Add 2-digit numbers",
          "A.2 Add 3-digit numbers",
          "A.3 Add multiples of 10",
          "A.4 Addition word problems - 2-digit numbers",
          "A.5 Add a 2-digit number and a 1-digit number",
        ]),
        "B.Subtraction": this.generateDummyDataForSkill([
          "B.1 Subtract 2-digit numbers",
          "B.2 Subtract multiples of 10",
          "B.3 Subtraction word problems - 2-digit numbers",
          "B.4 Subtract 1-digit numbers from 2-digit numbers",
          "B.5 Subtract with regrouping",
        ]),
        "C.Multiplication": this.generateDummyDataForSkill([
          "C.1 Introduction to Multiplication",
          "C.2 Multiply by 1-digit numbers",
          "C.3 Multiply by multiples of 10",
          "C.4 Multiplication word problems - 1-digit numbers",
          "C.5 Multiply in parts",
        ]),
        "D.Division": this.generateDummyDataForSkill([
          "D.1 Introduction to Division",
          "D.2 Divide by 1-digit numbers",
          "D.3 Division word problems - 1-digit numbers",
          "D.4 Divide multiples of 10",
          "D.5 Divide in parts",
        ]),
        "E.Fractions": this.generateDummyDataForSkill([
          "E.1 Introduction to Fractions",
          "E.2 Halves and quarters",
          "E.3 Fractions on a number line",
          "E.4 Compare fractions",
          "E.5 Add and subtract fractions",
          "E.6 Fractions of a set",
        ]),
        "F.Geometry": this.generateDummyDataForSkill([
          "F.1 Two-dimensional shapes review",
          "F.2 Three-dimensional shapes review",
          "F.3 Classify Two-dimensional shapes",
          "F.4 Count sides and vertices",
          "F.5 Compare sides and vertices",
        ]),
        "G.Measurements": this.generateDummyDataForSkill([
          "G.1 Measure in inches and centimeters",
          "G.2 Measure using a ruler",
          "G.3 Compare lengths",
          "G.4 Compare and estimate weights",
        ]),
        "H.Money": this.generateDummyDataForSkill([
          "H.1 Introduction to money",
          "H.2 Count money",
          "H.3 Money word problems",
          "H.4 Add money amounts",
          "H.5 Subtract money amounts",
        ]),
        "I.Time": this.generateDummyDataForSkill([
          "I.1 Read clocks and write time",
          "I.2 Time word problems",
          "I.3 Minutes and seconds",
        ]),
        "J.Data": this.generateDummyDataForSkill([
          "J.1 Introduction to Data",
          "J.2 Pictographs",
          "J.3 Tally Charts",
          "J.4 Bar Graphs",
          "J.5 Interpret Data",
        ]),
      },
    };
  }

  generateDummyDataForSkill(subtopics) {
    const skillData = {};
    subtopics.forEach((subtopic) => {
      skillData[subtopic] = this.generateDummyData();
    });
    return skillData;
  }

  generateDummyData() {
    const timeSpentMinutes = Math.floor(Math.random() * 121); // Generate a random number between 0 and 120 for TIME_SPENT (up to 2 hours)
    let timeSpentFormatted;

    if (timeSpentMinutes < 1) {
      timeSpentFormatted = "<1 min";
    } else if (timeSpentMinutes < 60) {
      timeSpentFormatted = `${timeSpentMinutes} min`;
    } else {
      const hours = Math.floor(timeSpentMinutes / 60);
      const minutes = timeSpentMinutes % 60;
      if (minutes === 0) {
        timeSpentFormatted = `${hours} hour`;
      } else {
        timeSpentFormatted = `${hours} hour ${minutes} min`;
      }
    }
    const lastPractisedDate = new Date(
      Date.now() - Math.floor(Math.random() * 1000 * 3600 * 24 * 30 * 6)
    );
    const year = lastPractisedDate.getFullYear();
    const month = String(lastPractisedDate.getMonth() + 1).padStart(2, "0");
    const day = String(lastPractisedDate.getDate()).padStart(2, "0");
    const lastPractisedFormatted = `${year}-${month}-${day}`;

    return {
      SMARTSCORE: Math.floor(Math.random() * 101), // Generate a random number between 0 and 100 for SMARTSCORE
      QUESTIONS_ANSWERED: Math.floor(Math.random() * 1001), // Generate a random number between 0 and 1000 for QUESTIONS_ANSWERED
      TIME_SPENT: timeSpentFormatted, // Use the formatted time spent
      LAST_PRACTISED: lastPractisedFormatted, // Use the formatted last practised date
    };
  }
}

const classSkills = new ClassSkills();
console.log(JSON.stringify(classSkills.skills, null, 2));
export default ClassSkills; // Export might not be needed if you're using this class internally in your application
