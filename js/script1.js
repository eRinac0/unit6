let Document = {
    Title: "",
    Body: "",
    Footer: "",
    Date: "",
    Attachment: {
      Subject: "",
      Body: "",
      Footer: "",
      Date: ""
    },
    fillDocument: function(title, body, footer, date, attachmentSubject, attachmentBody, attachmentFooter, attachmentDate) {
      this.Title = title;
      this.Body = body;
      this.Footer = footer;
      this.Date = date;
      this.Attachment.Subject = attachmentSubject;
      this.Attachment.Body = attachmentBody;
      this.Attachment.Footer = attachmentFooter;
      this.Attachment.Date = attachmentDate;
    },
    displayDocument: function() {
      console.log("Title:", this.Title);
      console.log("Body:", this.Body);
      console.log("Footer:", this.Footer);
      console.log("Date:", this.Date);
      console.log("Attachment Subject:", this.Attachment.Subject);
      console.log("Attachment Body:", this.Attachment.Body);
      console.log("Attachment Footer:", this.Attachment.Footer);
      console.log("Attachment Date:", this.Attachment.Date);
    }
  };
  
  Document.fillDocument("Main Document Title", "Main Document Body", "Main Document Footer", "2023-04-01", "Attachment Subject", "Attachment Body", "Attachment Footer", "2023-04-01");
  
  Document.displayDocument();
  