import { debounce } from 'lodash';
import { onBeforeUnmount, onMounted, ref } from 'vue';

export default function useClientWidth() {
  const clientWidth = ref(document.body.clientWidth);
  const windowWidthHandler = debounce(() => {
    const width = document.body.clientWidth;
    clientWidth.value = width;
  }, 500);

  onMounted(() => {
    window.addEventListener('resize', windowWidthHandler);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', windowWidthHandler);
  });

  return {
    clientWidth,
  };
}
