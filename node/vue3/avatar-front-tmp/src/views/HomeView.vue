<template>
  <el-container class="layout-container-demo" style="height: 500px; background-color: aqua">
    <el-aside width="200px">
      <el-scrollbar>
        <el-menu :default-openeds="['1']" :default-active="`1-1`">
          <el-sub-menu index="1">
            <template #title>
              <el-icon><message /></el-icon>Navigator One
            </template>
            <el-menu-item index="1-1">自有项目</el-menu-item>
            <el-menu-item index="1-2">合作伙伴</el-menu-item>
            <el-menu-item index="1-3">数据集</el-menu-item>
            <el-sub-menu index="1-4">
              <template #title>Option4</template>
              <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container style="background-color: bisque">
      <el-header style="text-align: right; background-color: aquamarine; font-size: 12px">
        <div class="toolbar">
          <el-dropdown>
            <el-icon style="margin-right: 8px; margin-top: 1px"><setting /></el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>Tom</span>
        </div>
      </el-header>

      <el-main>
        switch parent border: <el-switch v-model="parentBorder" /> switch child border:
        <el-switch v-model="childBorder" />
        <el-scrollbar>
          <el-table
            :data="tableData"
            :table-layout="tableLayout"
            style="width: 100%"
            :border="parentBorder"
          >
            <el-table-column type="expand">
              <template #default="props">
                <div m="4">
                  <el-row :gutter="20">
                    <el-col :span="6"><h3>自有样本集</h3></el-col>
                    <el-col :span="18">
                      <el-row justify="end">
                        <el-button type="primary" plain :icon="Plus">添加自有项目样本集</el-button>
                      </el-row>
                    </el-col>
                  </el-row>
                  <!-- <li v-for="item in props.row.sampleSet" :key="item">{{ item }}</li> -->
                  <el-table :data="props.row.sampleSet" :border="childBorder">
                    <el-table-column prop="name" label="样本集名称" />
                    <el-table-column prop="column_count" label="字段数" />
                    <el-table-column prop="size_str" label="大小" />
                    <el-table-column prop="creator" label="样本集添加人" />
                    <el-table-column label=".." />
                    <el-table-column label="操作">
                      <el-button type="primary" :icon="Delete" />
                    </el-table-column>
                  </el-table>

                  <el-row :gutter="20">
                    <el-col :span="6"><h3>合作样本集</h3></el-col>
                    <el-col :span="18">
                      <el-row justify="end">
                        <el-button type="primary" plain :icon="Plus">添加合作方样本集</el-button>
                      </el-row>
                    </el-col>
                  </el-row>
                  <!-- <li v-for="item in props.row.partnerSampleSet" :key="item">{{ item }}</li> -->
                  <el-table :data="props.row.partnerSampleSet" :border="childBorder">
                    <el-table-column prop="name" label="样本集名称" />
                    <el-table-column prop="column_count" label="字段数" />
                    <el-table-column prop="size_str" label="大小" />
                    <el-table-column prop="partner_name" label="合作方" />
                    <el-table-column prop="creator" label="样本集添加人" />
                    <el-table-column prop="auth_status" label="状态" />
                    <el-table-column label="操作">
                      <el-button-group>
                        <el-button type="primary" :icon="Edit" />
                        <el-button type="primary" :icon="Delete" />
                      </el-button-group>
                    </el-table-column>
                  </el-table>

                  <div style="background-color: yellowgreen">
                    <el-row :gutter="20">
                      <el-col :span="6"><h3>流程</h3></el-col>
                      <el-col :span="18">
                        <el-row justify="end">
                          <el-button type="primary" plain :icon="Plus">新建流程</el-button>
                        </el-row>
                      </el-col>
                    </el-row>
                    <el-table :data="props.row.flow" :border="childBorder">
                      <!-- <el-table-column
                      v-for="flow in props.row.flows.keys()"
                      :key="flow"
                      prop="value"
                      lable="样本集"
                    /> -->
                      <el-table-column prop="name" label="名称" />
                      <el-table-column label="运行成功数/总组件数">
                        <template #default="res">
                          {{ res.row.successNumber }}/{{ res.row.componentCount }}
                        </template>
                      </el-table-column>
                      <el-table-column prop="engine" label="引擎" />
                      <el-table-column prop="state" label="运行状态" />
                      <el-table-column label="操作">
                        <el-button-group class="ml-4">
                          <el-button type="primary" :icon="Edit" />
                          <el-button type="primary" :icon="Delete" />
                        </el-button-group>
                      </el-table-column>
                    </el-table>
                  </div>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="date" label="项目名称" />
            <el-table-column prop="creator" label="创建者" />
          </el-table>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
  <!-- <main>
    <TheWelcome />
  </main> -->
</template>

<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'

import { ref } from 'vue'
import { Message, Setting, Edit, Delete, Plus } from '@element-plus/icons-vue'

const parentBorder = ref(false)
const childBorder = ref(false)
const tableLayout = ref('auto')

// const tableData = ref(Array.from({ length: 20 }).fill(item))
const tableData = [
  {
    date: '2016-05-02',
    name: '纵向联邦',
    sampleSet: [
      {
        name: 'POC_ZX_Y_10W_40f_230710',
        column_count: 42,
        creator: 'adm*',
        size_str: '42.9MB',
        source: 'CSV'
      },
      {
        name: 'POC_ZX_X_10W_40f_230710',
        column_count: 41,
        creator: 'adm*',
        source: 'CSV',
        size_str: '42.7MB'
      }
    ],
    partnerSampleSet: [
      {
        name: 'POC_ZX_X_10W_40f_230710',
        column_count: 41,
        size_str: '42.7MB',
        partner_name: 'demo320-n3',
        creator: 'adm*',
        auth_status: 'APPROVED',
        audit_scope: 'PROJECT'
      },
      {
        name: 'POC_ZX_X_10W_40f_230710',
        column_count: 41,
        size_str: '42.7MB',
        partner_name: 'demo320-n2',
        creator: 'adm*',
        auth_status: 'APPROVED',
        audit_scope: 'PROJECT'
      }
    ],
    creator: 'admin',
    flow: [
      {
        name: '2P-回归',
        engine: 'FUDATA/SELF/3.2.0',
        description: '2P-回归',
        successNumber: 38,
        componentCount: 85,
        state: 'running',
        creator: 'admin'
      }
    ]
  },
  {
    date: '2016-05-03',
    name: '',
    sampleSet: [],
    partnerSampleSet: [],
    flow: [],
    creator: 'admin'
  }
]
</script>
