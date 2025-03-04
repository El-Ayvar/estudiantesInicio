let estudiantes = [
    {
    nombre: 'Alvaro',
    promedio : 9,
    curso : 'Android',
    },
    {
    nombre: 'Daniel',
    promedio : 6,
    curso : 'Full Stack',
    },
    {
    nombre: 'Alexis',
    promedio : 3,
    curso : 'iOS',
    },
];

estudiantes.unshift(
    {
        nombre: "Mariana",
        curso: "Full Stack",
        promedio: 9
    }
)

estudiantes.unshift(
    {
        nombre: "Francisco",
        curso: "Android",
        promedio: 2
    }
)

console.log(estudiantes)