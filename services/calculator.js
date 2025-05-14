        function calculatePrice(event) {
        event.preventDefault();

        const siteType = document.getElementById("siteType").value;
        const itemCount = Number(document.getElementById("itemCount").value);
        const resultDiv = document.getElementById("result");

        let pricePerItem;

        switch (siteType) {
          case "OnlineStore":
            pricePerItem = 300;
            break;
          case "BusinessSite":
            pricePerItem = 450;
            break;
          case "Blog":
            pricePerItem = 200;
            break;
          default:
            pricePerItem = 0;
        }

        if (itemCount <= 0 || pricePerItem <= 0 || siteType === "") {
            resultDiv.textContent = "Please enter valid project details.";
            resultDiv.style.color = "red";
            return;
        }

        const totalPrice = itemCount * pricePerItem;

        resultDiv.innerHTML =
        `<p><strong>Site Type:</strong> ${siteType}</p>
         <p><strong>Number of pages:</strong> ${itemCount}</p>
         <p><strong>Price per page:</strong> ₪${pricePerItem.toFixed(2)}</p>
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

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("siteType").selectedIndex = 0;
});
  