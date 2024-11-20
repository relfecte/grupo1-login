
        function toggleSidebar() {
            const sidebar = document.getElementById('userSidebar');
            sidebar.classList.toggle('open');
        }

        function changeProfilePic() {
            document.getElementById('uploadInput').click();
        }

        function previewImage(event) {
            const reader = new FileReader();
            reader.onload = function () {
                const output = document.getElementById('profilePic').querySelector('img');
                output.src = reader.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }

        function logoutUser() {
            alert("Sesión cerrada");
            // Lógica de cierre de sesión
        }

        document.addEventListener("DOMContentLoaded", () => {
            const userName = "John Doe";
            const userEmail = "john.doe@example.com";
            const userScore = 120;

            document.getElementById("userName").textContent = userName;
            document.getElementById("userEmail").textContent = userEmail;
            document.getElementById("userScore").textContent = userScore;
        });
  