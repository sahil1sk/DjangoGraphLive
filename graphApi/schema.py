import graphene
from graphene_django.types import DjangoObjectType

from graphene import relay
from graphene_django.filter import DjangoFilterConnectionField
from graphql_relay import from_global_id # this will help to convert into the original id

from .models import Task


# just for relay implementation
class TaskNode(DjangoObjectType):
	class Meta:
		model = Task
		filter_fields = {
							'title': ['exact', 'icontains', 'istartswith'] 
						}
		interfaces = {relay.Node, }


class Query(graphene.ObjectType):
	all_tasks = DjangoFilterConnectionField(TaskNode)					
	
	
# so here we create class for mutation
class TaskCreateMutation(relay.ClientIDMutation):
	class Input:
		title = graphene.String(required=True)
		
	task = graphene.Field(TaskNode)

	@classmethod
	def mutate_and_get_payload(cls, root, info, title):
		task = Task.objects.create(title=title)

		return TaskCreateMutation(task=task)


class TaskUpdateMutation(relay.ClientIDMutation):
	class Input:
		title = graphene.String()
		completed = graphene.Boolean()
		_id = graphene.ID(required=True)

	task = graphene.Field(TaskNode)

	@classmethod
	def mutate_and_get_payload(cls, root, info, title, _id, completed): 
		task = Task.objects.get(id=from_global_id(_id)[1]) 
		if title is not None:
			task.title = title
		if completed is not None:
			task.completed = completed
		task.save()
		return TaskUpdateMutation(task=task)


class TaskDeleteMutation(relay.ClientIDMutation):
	class Input:
		_id = graphene.ID(required=True)

	task = graphene.Field(TaskNode)
	
	@classmethod
	def mutate_and_get_payload(cls, root, info, _id):
		task = Task.objects.filter(id=from_global_id(_id)[1])[0]
		task.delete()
		task.id = _id
		return TaskDeleteMutation(task=task)

class Mutation:
	create_task = TaskCreateMutation.Field()
	update_task = TaskUpdateMutation.Field()
	delete_task = TaskDeleteMutation.Field()




