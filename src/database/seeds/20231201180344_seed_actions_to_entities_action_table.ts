import { Knex } from 'knex';
import { ActionCategory, TABLES } from '../../shared/constants/tables';

export async function seed(knex: Knex): Promise<void> {
  await knex(TABLES.ENTITY_ACTION).del();

  await knex(TABLES.ENTITY_ACTION).insert([
    {
      action_key: 'dashboard/list',
      entity_key: 'dashboard',
      action_category: ActionCategory.READ,
    },

    {
      action_key: 'settings/list',
      entity_key: 'settings',
      action_category: ActionCategory.READ,
    },

    {
      action_key: 'users/list',
      entity_key: 'users',
      action_category: ActionCategory.READ,
    },
    {
      action_key: 'users/create',
      entity_key: 'users',
      action_category: ActionCategory.CREATE,
    },
    {
      action_key: 'users/update',
      entity_key: 'users',
      action_category: ActionCategory.UPDATE,
    },
    {
      action_key: 'users/delete',
      entity_key: 'users',
      action_category: ActionCategory.DELETE,
    },
    {
      action_key: 'users/permissions',
      entity_key: 'users',
      action_category: ActionCategory.UPDATE,
    },

    {
      action_key: 'roles/list',
      entity_key: 'roles',
      action_category: ActionCategory.READ,
    },
    {
      action_key: 'roles/create',
      entity_key: 'roles',
      action_category: ActionCategory.CREATE,
    },
    {
      action_key: 'roles/update',
      entity_key: 'roles',
      action_category: ActionCategory.UPDATE,
    },
    {
      action_key: 'roles/delete',
      entity_key: 'roles',
      action_category: ActionCategory.DELETE,
    },

    {
      action_key: 'groups/list',
      entity_key: 'groups',
      action_category: ActionCategory.READ,
    },
    {
      action_key: 'groups/create',
      entity_key: 'groups',
      action_category: ActionCategory.CREATE,
    },
    {
      action_key: 'groups/update',
      entity_key: 'groups',
      action_category: ActionCategory.UPDATE,
    },
    {
      action_key: 'groups/delete',
      entity_key: 'groups',
      action_category: ActionCategory.DELETE,
    },
  ]);
}
