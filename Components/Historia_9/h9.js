mobiscroll.setOptions({
    locale: mobiscroll.localeEs,
    theme: 'ios',
    themeVariant: 'light'
});

mobiscroll.datepicker('#demo', {
    controls: ['calendar', 'time'],
    display: 'inline'
});

mobiscroll.datepicker('#demo-timegrid', {
    controls: ['calendar', 'timegrid'],
    display: 'inline'
});