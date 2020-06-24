using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Characters
{
    public class List
    {
        
                public class Query : IRequest<List<Character>> { }
        
                public class Handler : IRequestHandler<Query, List<Character>>
                {
                    private readonly DataContext _context;
                    public Handler(DataContext context)
                    {
                        _context = context;
                    }
        
                    public async Task<List<Character>> Handle(Query request, CancellationToken cancellationToken)
                    {
                        return await _context.Characters.ToListAsync();
                    }
                }
    }
}