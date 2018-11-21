import $ from 'jquery';
import './style.css';

$('#login').click(() => {
    console.log('button clicked');

    import('./helpers').then(resp => {
        console.log('Import Resp', resp);

        const { login, addToDom } = resp;

        
        const result1 = login('SassySally', 'qwer');

        const result2 = login('SomeRandom', 'gjh');

        addToDom('h1', result1, 'green');
        addToDom('h1', result2, 'red');
    })
});

// $('#load-image').click(()=>{
//     console.log('loading image');
    
//     import('./helpers').then(resp => {

//         const { addImg } = resp;

//         import('./webpackLogo.png').then(src => {
//             addImg(src.default);
//         });

//     });
// })

$('#load-image').click( async()=>{
    console.log('loading image');
    
    const resp = await import('./helpers');
    
    const { addImg } = resp;

    const src = await import('./webpackLogo.png');

    addImg(src.default);

})