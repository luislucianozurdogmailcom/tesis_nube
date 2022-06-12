from django.shortcuts import render

# Create your views here.
def usuariolist(request):
    return render(request, 'usuarioList.html')
