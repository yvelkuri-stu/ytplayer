<script>
    function onLogin(){
        console.log("Trying to login")
    }
</script>

<!-- component -->
<div class="w-full flex justify-center" on:click="{onLogin}">
    <a  href="/login"
        class="flex text-gray-100 justify-center transition duration-200 ease-in-out transform px-4 py-2 w-48 border-b-4 border-gray-500 hover:border-b-2 bg-gradient-to-t from-gray-400  via-gray-600 to-gray-200 rounded-2xl hover:translate-y-px "

        style="-webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 8px rgba(0,0,0,0); 
        box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);">
        <span class="font-bold">
        Login With Github</span>
    </a>
</div>