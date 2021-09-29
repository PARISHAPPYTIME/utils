<script lang="ts">
import { defineComponent, reactive, defineAsyncComponent, computed, toRefs } from 'vue'
import { columnData, dealWithColumns } from './config'
export default defineComponent({
    setup(props) {
        const tableData = reactive([
            {
                date: '2016-05-03',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
            },
            {
                date: '2016-05-03',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
            },
            {
                date: '2016-05-03',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
            },
            {
                date: '2016-05-03',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
            },
            {
                date: '2016-05-02',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
            },
            {
                date: '2016-05-04',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
            },
            {
                date: '2016-05-01',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
            },
            {
                date: '2016-05-08',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
            },
            {
                date: '2016-05-06',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
            },
            {
                date: '2016-05-07',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
            },
        ])

        const { columns, actionButtons } = dealWithColumns(columnData)
        console.log(columns, actionButtons)
        // const columns = reactive()

        const com = defineAsyncComponent(() => import('./components/file'))
        const matchComponent = (config, row, column, index) => {
            console.log(1)
            return com
        }

        const actionButtonsClick = (fnName: string, row, column, index) => {}
        const serialNumber = computed(() => {
            return (index) => 0
        })
        return {
            tableData,
            columns,
            actionButtons,
            matchComponent,
            actionButtonsClick,
            serialNumber,
        }
    },
    renderTracked({ key, target, type }) {
        console.log({ key, target, type })
    },
    renderTriggered({ key, target, type }) {
        console.log({ key, target, type })
    },
})
</script>

<template>
    <div>
        <el-table
            :data="tableData"
            style="width: 100%"
            :header-cell-style="{
                background: '#f5f7fa',
            }"
            max-height="545"
        >
            <slot name="selection"></slot>
            <slot name="index">
                <el-table-column fixed label="序号" width="55" align="center">
                    <template #default="{ $index }">
                        <span>{{ serialNumber($index) }}</span>
                    </template>
                </el-table-column>
            </slot>
            <el-table-column
                v-for="item in columns"
                :key="item.key"
                :prop="item.key"
                :label="item.label"
                width="120"
                :show-overflow-tooltip="true"
            >
                <template #default="{ row, column, $index }">
                    <component :is="matchComponent(item, row, column, $index)" />
                </template>
            </el-table-column>
            <slot name="actions">
                <el-table-column
                    :show-overflow-tooltip="true"
                    label="操作"
                    min-width="200"
                    fixed="right"
                    class-name="action-buttons"
                >
                    <template #default="{ row, column, $index }">
                        <span v-for="btn in actionButtons" :key="btn.label">
                            <el-popconfirm
                                v-if="btn.type === 1"
                                v-permission="[btn.permission]"
                                :title="btn.title"
                                @confirm="actionButtonsClick(btn.fnName, row, column, $index)"
                            >
                                <template #reference>
                                    <el-link
                                        :underline="false"
                                        :class="`${btn.fnName}-link-item`"
                                        type="primary"
                                    >
                                        <span>{{ btn.name }}</span>
                                    </el-link>
                                </template>
                            </el-popconfirm>
                            <el-link
                                v-else
                                :underline="false"
                                v-permission="[btn.permission]"
                                :class="`${btn.fnName}-link-item`"
                                type="primary"
                                @click="actionButtonsClick(btn.fnName, row, column, $index)"
                            >
                                <span>{{ btn.name }}</span>
                            </el-link>
                        </span>
                    </template>
                </el-table-column>
            </slot>
        </el-table>
    </div>
</template>
