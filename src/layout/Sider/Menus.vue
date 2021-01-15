<script lang="ts">
import {
  computed,
  defineComponent,
  Fragment,
  h,
  VNode,
  FunctionalComponent,
} from 'vue';
import { RouterLink } from 'vue-router';
import { Menu } from 'ant-design-vue';
import { useStore } from 'vuex';
import {
  UserOutlined,
  FormOutlined,
  MenuOutlined,
} from '@ant-design/icons-vue';
import { RootState } from '@/store';
import { Menu as MenuProp } from '@/api/login';
import { AntdIconProps } from '@ant-design/icons-vue/lib/components/AntdIcon';

export default defineComponent({
  name: 'Menus',
  setup() {
    const icons: { [prop: string]: FunctionalComponent<AntdIconProps> } = {
      user: UserOutlined,
      form: FormOutlined,
      menu: MenuOutlined,
    };
    const store = useStore<RootState>();
    const menus = computed(() => store.state.user.menus);
    const generateMenus = (menuList: MenuProp[]): VNode[] =>
      menuList.map((menu) => {
        if (menu.children && menu.children.length > 0) {
          return h(
            Menu.SubMenu,
            {
              title: () =>
                h(Fragment, [
                  menu.icon && h(icons[menu.icon]),
                  h('span', menu.title),
                ]),
            },
            generateMenus(menu.children),
          );
        } else {
          return h(
            Menu.Item,
            h(RouterLink, { to: menu.fullPath }, [
              menu.icon && h(icons[menu.icon]),
              h('span', menu.title),
            ]),
          );
        }
      });
    return () => generateMenus(menus.value);
  },
});
</script>
