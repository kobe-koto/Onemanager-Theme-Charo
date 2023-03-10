<template>
    <header>
        <span class="title">
            <a href="/">ArmoLab OM</a>
        </span>
        <nav class="menu">
            <a 
                v-for="item in navigation" 
                :key="item.name" 
                :href="item.href" 
                :class="[item.current ? 'current' : '']"
            >
            {{ item.name }}
        </a>
        </nav>
    </header>
</template>
  
<script setup>
    const navigation = [
        { name: 'Home',       current: true,     href: 'javascript:void(0)'},
        { name: 'Admin-Panel',   current: false,    href: 'javascript:alert("沒有寫捏")'},
    ]
</script>

<style scoped>
    header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        -webkit-backdrop-filter: blur(15px);
        backdrop-filter: blur(15px);
        background-color: rgba(25, 104, 106, .6);
        padding: 15px 0;
        color: #f8f8ff;
        z-index: 128;
    }
    span.title {
        margin-left: 15px;
        letter-spacing: 2px;
        opacity: 0;
        transition: opacity,letter-spacing ease 0.85s;
    }
    nav.menu {
        opacity: 0;
        transition: opacity ease 0.35s;
        margin-right: 15px;
        float: right;
    }
    body.loaded span.title {
        letter-spacing: 0px;
        opacity: 1;
    }
    body.loaded nav.menu {
        opacity: 1;
    }
    nav.menu > a:not(:last-child) {
        margin-right: 10px;
    }
    nav.menu > a.current {
        margin-bottom: -10px;
    }
    nav.menu > a.current::after {
        position: relative;
        top: -10px;
        left: 5px;
        z-index: -1;
        width: 100%;
        height: 10px;
        border-radius: 5px;
        opacity: .35;
        background-color: #00ffff;
    }
    nav.menu > a.current:hover::after {
        -webkit-animation: shake 0.3s ease;
        animation: shake .45s linear;
    }
    @-webkit-keyframes shake {
        0%, 100% {
            -webkit-transform: translateX(0px);
        }
        33% {
            -webkit-transform: translateX(-1px);
        }
        66% {
            -webkit-transform: translateX(1px);
        }
    }
    @keyframes shake {
        0%, 100% {
            transform: translateX(0px);
        }
        33% {
            transform: translateX(-1px);
        }
        66% {
            transform: translateX(1px);
        }
    }
    @media (max-width: 600px)  {
        header {
            text-align: center;
        }
        span.title, nav.menu {
            display: block;
            width: 100%;
            float: none;
        }
        span.title {
            margin-left: 0;
        }
        nav.menu {
            margin-right: 0;
            margin-top: 5px;
        }
    }
</style>