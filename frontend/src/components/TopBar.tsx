import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import  {InputText} from  'primereact/inputtext'

export default function TopBar() {
    const items: MenuItem[] = [
        {
            label: 'Settings',
            icon: 'pi pi-fw pi-cog',
            items: [
                {
                    label: 'Account',
                    icon: 'pi pi-fw pi-user',
                    items: [
                        {
                            label: 'Bookmark',
                            icon: 'pi pi-fw pi-bookmark'
                        },
                        {
                            label: 'Video',
                            icon: 'pi pi-fw pi-video'
                        },

                    ]
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-trash'
                },
                {
                    separator: true
                },
                {
                    label: 'Export',
                    icon: 'pi pi-fw pi-external-link'
                }
            ]
        },
        {
            label: 'Project',
            icon: 'pi pi-fw pi-sitemap',
            items: [
                {
                    label: 'Left',
                    icon: 'pi pi-fw pi-align-left'
                },
                {
                    label: 'Right',
                    icon: 'pi pi-fw pi-align-right'
                },
                {
                    label: 'Center',
                    icon: 'pi pi-fw pi-align-center'
                },
                {
                    label: 'Justify',
                    icon: 'pi pi-fw pi-align-justify'
                },

            ]
        },
        {
            label: 'List',
            icon: 'pi pi-fw pi-list',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-user-plus',

                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-user-minus',

                },
                {
                    label: 'Search',
                    icon: 'pi pi-fw pi-users',
                    items: [
                        {
                            label: 'Filter',
                            icon: 'pi pi-fw pi-filter',
                            items: [
                                {
                                    label: 'Print',
                                    icon: 'pi pi-fw pi-print'
                                }
                            ]
                        },
                        {
                            icon: 'pi pi-fw pi-bars',
                            label: 'List'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Item',
            icon: 'pi pi-fw pi-file',
            items: [
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                    items: [
                        {
                            label: 'Save',
                            icon: 'pi pi-fw pi-calendar-plus'
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-fw pi-calendar-minus'
                        }
                    ]
                },
                {
                    label: 'Archive',
                    icon: 'pi pi-fw pi-calendar-times',
                    items: [
                        {
                            label: 'Remove',
                            icon: 'pi pi-fw pi-calendar-minus'
                        }
                    ]
                }
            ]
        },
   
    ];

    const start = <img style={{height:"2rem"}} src="https://aadcdn.msauthimages.net/c1c6b6c8-rf5jwjkehqhcjqynqvasf4hs1scx1idpzddimyi6ez4/logintenantbranding/0/headerlogo?ts=638156073153050506" />
    const end = <InputText placeholder="Search CTRL+K" type="text" />;
    return (
        <div className="card">
            <Menubar className='pl-3 pr-3' start={start} model={items} end={end}  />
        </div>
    )
}
        