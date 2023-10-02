export default function Review(){
    return (
        <div>
            <h1>Review</h1>
            <p>This is the review page</p>
            <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <label>
    Website Review
    <textarea name="paragraph_text" cols="50" rows="10"></textarea>
  </label>
  <input type="submit" value="Submit" />
  <label for="email" type="submit" value="submit">Email Address</label>
  <input type="email" id="email" size="30" required> 
  </input> 
</form>
        </div>
    )
}