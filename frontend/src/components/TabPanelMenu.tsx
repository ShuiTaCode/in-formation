import { TabMenu } from 'primereact/tabmenu';
import { MenuItem } from 'primereact/menuitem';

export default function TabPanelMenu() {
    const items: MenuItem[] = [
        {label: 'Home', icon: 'pi pi-fw pi-home'},
        {label: 'Lists', icon: 'pi pi-fw pi-list'},
        {label: 'Visualsitaion', icon: 'pi pi-fw pi-chart-bar'},
        {label: 'Documentation', icon: 'pi pi-fw pi-book'},
    ];

    return (
        <div className="card">
            <TabMenu model={items} />
        </div>
    )
}
        