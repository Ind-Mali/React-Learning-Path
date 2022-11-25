
const ContactArea = () => {
  return (
    <div className="w3-container" id="where" style={{paddingBottom: '32px'}}>
    <div className="w3-content" style={{maxWidth: '700px'}}>
      <h5 className="w3-center w3-padding-48"><span className="w3-tag w3-wide">WHERE TO FIND US</span></h5>
      <p>Find us at some address at some place.</p>
      <img src="https://www.w3schools.com//w3images/map.jpg" className="w3-image" style={{width: '100%'}} />
      <p><span className="w3-tag">FYI!</span> We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste.</p>
      <p><strong>Reserve</strong> a table, ask for today's special or just send us a message:</p>
      <form action="/action_page.php" target="_blank">
        <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" required name="Name" /></p>
        <p><input className="w3-input w3-padding-16 w3-border" type="number" placeholder="How many people" required name="People" /></p>
        <p><input className="w3-input w3-padding-16 w3-border" type="datetime-local" placeholder="Date and time" required name="date" defaultValue="2020-11-16T20:00" /></p>
        <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Message \ Special requirements" required name="Message" /></p>
        <p><button className="w3-button w3-black" type="submit">SEND MESSAGE</button></p>
      </form>
    </div>
  </div>
  )
}

export default ContactArea