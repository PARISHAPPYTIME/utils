<script lang="ts">
import { Table, Divider } from 'ant-design-vue'
import { defineComponent, defineAsyncComponent } from 'vue'
import type { Component } from 'vue'
import { ColumnProps } from 'ant-design-vue/es/table/interface';
type Key = ColumnProps['key'];

interface DataType {
    key: Key;
    name: string;
    age: number;
    address: string;
}

const TableColumn = Table.Column

const columns = [
    {
        dataIndex: 'name',
        key: 'name',
        slots: {
            title: 'customTitle',
            customRender: 'name',
        }
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        slots: {
            customRender: 'tags',
        },
        inputTypeName: 'tag'
    }
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
export default defineComponent({
    components: { Table, TableColumn, Divider },
    setup() {
        const rowSelection = {
            onChange: (selectedRowKeys: Key[], selectedRows: DataType[]) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: (record: DataType) => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
            }),
        };

        const matchComponent = (inputTypeName: string): Component => {
            return defineAsyncComponent(() => import('./package/select.vue'))
        }

        return {
            data, columns, matchComponent, rowSelection
        }
    }
})
</script>

<template>
    <div class="component-table">
        <Table
            rowKey="key"
            :data-source="data"
            bordered
            :row-selection="rowSelection"
            size="middle"
            :scroll="{ x: '1300px' }"
        >
            <TableColumn width="55px" key="index" title="序号" data-index="Index" align="center">
                <template #default="{ text, record, index }">
                    <span>{{ index + 1 }}</span>
                </template>
            </TableColumn>
            <TableColumn
                v-for="(column) in columns"
                :key="column.key"
                :title="column.title"
                :data-index="column.dataIndex"
                :ellipsis="true"
            >
                <template #default="{ text, record }">
                    <component
                        v-if="column.inputTypeName"
                        :is="matchComponent(column.inputTypeName)"
                    ></component>
                    <span v-else>{{ text }}</span>
                </template>
            </TableColumn>
            <TableColumn key="actions" title="操作" data-index="Actions" fixed="right">
                <template #default="{ text, record }">
                    <a>Action 一 {{ record.firstName }}</a>
                    <Divider type="vertical" />
                    <a>Delete</a>
                </template>
            </TableColumn>
        </Table>
    </div>
</template>

<style lang="less" scoped>
.component-table {
    width: 1140px;
    margin: 0 auto;
}
</style>