<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goInicio = () => router.push('/');
const goDesciplinas = () => router.push('/disci');
const goContacto = () => router.push('/contacto');
</script>

<template>
    <div class="nav-container">
        <div class="logo">
           <h2>Get <span>Up</span></h2>
           <h6>Wellnnes & Fitness</h6>
        </div>

        <ul>
            <li :class="{ active: $route.path === '/' }" @click="goInicio"><span>Inicio</span></li>
            <li :class="{ active: $route.path === '/disci' }" @click="goDesciplinas"><span>Disciplinas</span></li>
            <li :class="{ active: $route.path === '/contacto' }" @click="goContacto"><span>Contactanos</span></li>
        </ul>
    </div>
</template>

<style>
@import './NavBar.css';
</style>