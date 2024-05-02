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

    {
      action_key: 'plans/list',
      entity_key: 'plans',
      action_category: ActionCategory.READ,
    },
    {
      action_key: 'plans/create',
      entity_key: 'plans',
      action_category: ActionCategory.CREATE,
    },
    {
      action_key: 'plans/update',
      entity_key: 'plans',
      action_category: ActionCategory.UPDATE,
    },
    {
      action_key: 'plans/delete',
      entity_key: 'plans',
      action_category: ActionCategory.DELETE,
    },

    {
      action_key: 'invoices/list',
      entity_key: 'invoices',
      action_category: ActionCategory.READ,
    },
    {
      action_key: 'invoices/create',
      entity_key: 'invoices',
      action_category: ActionCategory.CREATE,
    },
    {
      action_key: 'invoices/update',
      entity_key: 'invoices',
      action_category: ActionCategory.UPDATE,
    },
    {
      action_key: 'invoices/delete',
      entity_key: 'invoices',
      action_category: ActionCategory.DELETE,
    },

    {
      action_key: 'payments/list',
      entity_key: 'payments',
      action_category: ActionCategory.READ,
    },
    {
      action_key: 'payments/create',
      entity_key: 'payments',
      action_category: ActionCategory.CREATE,
    },
    {
      action_key: 'payments/update',
      entity_key: 'payments',
      action_category: ActionCategory.UPDATE,
    },
    {
      action_key: 'payments/delete',
      entity_key: 'payments',
      action_category: ActionCategory.DELETE,
    },

    {
      action_key: 'dues/list',
      entity_key: 'dues',
      action_category: ActionCategory.READ,
    },
    {
      action_key: 'dues/create',
      entity_key: 'dues',
      action_category: ActionCategory.CREATE,
    },
    {
      action_key: 'dues/update',
      entity_key: 'dues',
      action_category: ActionCategory.UPDATE,
    },
    {
      action_key: 'dues/delete',
      entity_key: 'dues',
      action_category: ActionCategory.DELETE,
    },

    {
      action_key: 'configurations/list',
      entity_key: 'configurations',
      action_category: ActionCategory.READ,
    },
    {
      action_key: 'configurations/create',
      entity_key: 'configurations',
      action_category: ActionCategory.CREATE,
    },
    {
      action_key: 'configurations/update',
      entity_key: 'configurations',
      action_category: ActionCategory.UPDATE,
    },
    {
      action_key: 'configurations/delete',
      entity_key: 'configurations',
      action_category: ActionCategory.DELETE,
    },

    {
      action_key: 'customers/list',
      entity_key: 'customers',
      action_category: ActionCategory.READ,
    },
    {
      action_key: 'customers/create',
      entity_key: 'customers',
      action_category: ActionCategory.CREATE,
    },
    {
      action_key: 'customers/update',
      entity_key: 'customers',
      action_category: ActionCategory.UPDATE,
    },
    {
      action_key: 'customers/delete',
      entity_key: 'customers',
      action_category: ActionCategory.DELETE,
    },

    {
      action_key: 'subscriptions/list',
      entity_key: 'subscriptions',
      action_category: ActionCategory.READ,
    },
    {
      action_key: 'subscriptions/create',
      entity_key: 'subscriptions',
      action_category: ActionCategory.CREATE,
    },
    {
      action_key: 'subscriptions/update',
      entity_key: 'subscriptions',
      action_category: ActionCategory.UPDATE,
    },
    {
      action_key: 'subscriptions/delete',
      entity_key: 'subscriptions',
      action_category: ActionCategory.DELETE,
    },
  ]);
}
