let  popup = document.getElementById("share-Btn");

        function openBtn(){
            popup.classList.add("open-popup");
        }

        function closeBtn(){
            popup.classList.remove("open-popup");
        }

        function copyLinc(){
            let text=document.querySelector("#linc").value;
            navigator.clipboard.writeText(text);
            alert('Link Copied');
        }