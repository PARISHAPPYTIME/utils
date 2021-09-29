enum ButtonType {
    COMMON = 1,
    CONFIRM = 2,
}

interface actionButton {
    name: string
    fnName: string
    type: ButtonType
    title?: string
    permission: boolean | string
}

interface column {
    key: string
    label: string
    alias: string | any
    inputTypeName?: string
    actionButtons?: actionButton | actionButton[]
}

export function dealWithColumns(columnData: column[]) {
    const columns = columnData.filter((el) => el.key !== 'actionButtons')
    const item = columnData.find((el) => el.key === 'actionButtons')
    const actionButtons = item ? item.actionButtons : []
    return { columns, actionButtons }
}

export const columnData: column[] = [
    {
        key: 'name',
        label: 'Nmae',
        alias: 'colsiName',
        inputTypeName: 'file',
    },
    {
        key: 'state',
        label: '状态',
        alias: function (row: any) {
            return row + '你好'
        },
    },
    {
        key: 'actionButtons',
        label: '状态',
        actionButtons: [
            {
                name: '查看',
                fnName: 'detail',
                type: 1,
                title: '是否删除',
                permission: true,
            },
        ],
        alias: function (row: any) {
            return row + '你好'
        },
    },
]
