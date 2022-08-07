<template>
  <div class="pagination">
    <button :disabled="pageNo == 1" @click="$emit('getPageNo', pageNo - 1)">上一页</button>
    <button v-if="starNum.star > 1" @click="$emit('getPageNo', 1)" :class="{ act: pageNo == 1 }">1</button>
    <button v-if="starNum.star > 2">···</button>

    <button v-for="(c1, index) in starNum.end" :key="index" v-show="c1 >= starNum.star" @click="$emit('getPageNo', c1)" :class="{ act: pageNo == c1 }">
      {{ c1 }}
    </button>

    <button v-if="starNum.end < totalPage - 1">···</button>
    <button v-if="starNum.end < totalPage" @click="$emit('getPageNo', totalPage - 1)">{{ totalPage }}</button>
    <button @click="$emit('getPageNo', pageNo + 1)">下一页</button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['pageNo', 'pageSize', 'total', 'continues'],
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    starNum() {
      let { totalPage, pageNo, pageSize, continues } = this;
      let star = 0,
        end = 0;
      if (continues > totalPage) {
        (star = 1), (end = totalPage);
      } else {
        star = pageNo - parseInt(continues / 2);
        end = pageNo + parseInt(continues / 2);
        if (star < 1) {
          star = 1;
          end = continues;
        }
        if (end > totalPage) {
          (end = totalPage), (star = totalPage - continues + 1);
        }
      }
      return { star, end };
    },
  },
};
</script>

<style lang="less" scoped>
.act {
  background-color: #409eff;
}
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }
    &.act {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
