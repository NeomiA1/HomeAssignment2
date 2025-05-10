document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("calculator-form");
    const resultDiv = document.getElementById("result");
    const clearBtn = document.getElementById("clear-btn");

    form.reset();

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const itemCount = Number(document.getElementById("itemCount").value);
        const pricePerItem = Number(document.getElementById("pricePerItem").value);
        const projectName = document.getElementById("projectName").value;

        if (itemCount <= 0 || pricePerItem <= 0 || projectName.trim() === "") {
            resultDiv.textContent = "Please enter valid project details.";
            resultDiv.style.color = "red";
            return;
        }

        const totalPrice = itemCount * pricePerItem

        resultDiv.innerHTML = 
        "<p><strong>Project:</strong>" + projectName + "</p>" +
        "<p><strong>Total price:</strong> ₪" + totalPrice.toFixed(2) + "</p>";
        resultDiv.style.color = "green";
    });

    if (clearBtn) {
           clearBtn.addEventListener("click", () => {
            form.reset(); 
            resultDiv.innerHTML = "";
            
            });
        }

    });
