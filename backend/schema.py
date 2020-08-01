import graphene
import graphApi.schema

class Query(graphApi.schema.Query, graphene.ObjectType):
    pass

class Mutation(graphApi.schema.Mutation, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)
