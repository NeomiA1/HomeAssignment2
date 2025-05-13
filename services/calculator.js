        function calculatePrice(event) {
        event.preventDefault();

        const projectName = document.getElementById("projectName").value;
        const itemCount = Number(document.getElementById("itemCount").value);
        const pricePerItem = Number(document.getElementById("pricePerItem").value);
        const resultDiv = document.getElementById("result");

        if (itemCount <= 0 || pricePerItem <= 0 || projectName.trim() === "") {
            resultDiv.textContent = "Please enter valid project details.";
            resultDiv.style.color = "red";
            return;
        }

        const totalPrice = itemCount * pricePerItem;

        resultDiv.innerHTML =
        `<p><strong>Project:</strong> ${projectName}</p>
         <p><strong>Number of items:</strong> ${itemCount}</p>
         <p><strong>Price per item:</strong> ₪${pricePerItem.toFixed(2)}</p>
         <p><strong>Total price:</strong> ₪${totalPrice.toFixed(2)}</p>`;
      resultDiv.style.color = "black";
      resultDiv.classList.remove("hidden");
    
      document.getElementById("calculator-form").reset();

}

function clearForm() {
    document.getElementById("calculator-form").reset();
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    resultDiv.classList.add("hidden");
}
  