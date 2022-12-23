

export default {
    name: 'daybook',
    component: () => import(/* webpackChunkName: "about" */ '@/modules/daybook/layaouts/DayBookLayout.vue'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import('@/modules/daybook/views/NoEntrySelected.vue')
        },
        {
            path: ':id',
            name: 'entry',
            component: () => import('@/modules/daybook/views/EntryView.vue')
        }
    ]
}