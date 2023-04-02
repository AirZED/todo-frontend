class FixDate {
  constructor(currentStamp) {
    this.currentStamp = currentStamp;
    this.requiredDate;
  }

  // getting date to required format
  formatDate() {
    const date = new Date(this.currentStamp).toLocaleDateString();

    const dateArr = date.split("/");
    this.requiredDate = `${dateArr[2]}-${
      dateArr[0].length < 2 ? "0" + dateArr[0] : dateArr[0]
    }-${dateArr[1].length < 2 ? "0" + dateArr[1] : dateArr[1]}`;

    return this.requiredDate;
  }
}

export default FixDate;
